// VSCodeEditorScreen.tsx
import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { WebView } from "react-native-webview";
import { useRouter } from "expo-router";

const VSCodeEditorScreen = () => {
  const [currentLanguage, setCurrentLanguage] = useState("javascript");
  const [isEditorReady, setIsEditorReady] = useState(false);
  const webViewRef = useRef(null);
  const router = useRouter();

  // HTML content with Monaco Editor
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <title>VS Code Editor</title>
      <style>
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        .container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100vw;
        }
        .editor-container {
          flex-grow: 1;
          position: relative;
        }
        #monaco-editor {
          width: 100%;
          height: 100%;
        }
        /* Custom styling for suggestions */
        .monaco-editor .suggest-widget {
          width: 90% !important;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="editor-container" id="monaco-editor"></div>
      </div>

      <!-- Load Monaco Editor from CDN -->
      <script src="https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs/loader.min.js"></script>
      <script>
        // Configure RequireJS
        require.config({
          paths: {
            'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs'
          }
        });

        let editor = null;
        
        // Load Monaco Editor
        require(['vs/editor/editor.main'], function() {
          // Setup default JavaScript language features
          monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
            target: monaco.languages.typescript.ScriptTarget.Latest,
            allowNonTsExtensions: true,
            moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
            module: monaco.languages.typescript.ModuleKind.CommonJS,
            noEmit: true,
            typeRoots: ["node_modules/@types"]
          });

          // Add type definitions for better IntelliSense
          fetch('https://cdn.jsdelivr.net/npm/@types/node@18.15.11/index.d.ts')
            .then(response => response.text())
            .then(types => {
              monaco.languages.typescript.javascriptDefaults.addExtraLib(
                types,
                'node.d.ts'
              );
            })
            .catch(error => console.error('Failed to load type definitions', error));

          // Add custom snippets
          monaco.languages.registerCompletionItemProvider('javascript', {
            provideCompletionItems: function(model, position) {
              const suggestions = [
                {
                  label: 'cl',
                  kind: monaco.languages.CompletionItemKind.Snippet,
                  insertText: 'console.log($1);',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  documentation: 'Log to console'
                },
                {
                  label: 'fun',
                  kind: monaco.languages.CompletionItemKind.Snippet,
                  insertText: 'function $1($2) {\\n\\t$3\\n}',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  documentation: 'Function definition'
                },
                {
                  label: 'afun',
                  kind: monaco.languages.CompletionItemKind.Snippet,
                  insertText: '($1) => {\\n\\t$2\\n}',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  documentation: 'Arrow function'
                },
                {
                  label: 'if',
                  kind: monaco.languages.CompletionItemKind.Snippet,
                  insertText: 'if ($1) {\\n\\t$2\\n}',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  documentation: 'If statement'
                },
                {
                  label: 'for',
                  kind: monaco.languages.CompletionItemKind.Snippet,
                  insertText: 'for (let $1 = 0; $1 < $2.length; $1++) {\\n\\t$3\\n}',
                  insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                  documentation: 'For loop'
                }
              ];
              return { suggestions: suggestions };
            }
          });

          // Initialize the editor with keyboard support
          editor = monaco.editor.create(document.getElementById('monaco-editor'), {
            value: '// Viết mã của bạn ở đây\\nconsole.log("Hello World!");',
            language: 'javascript',
            theme: 'vs-dark',
            automaticLayout: true,
            minimap: {
              enabled: false
            },
            fontSize: 14,
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            wordWrap: 'on',
            tabSize: 2,
            insertSpaces: true,
            autoIndent: 'full',
            formatOnType: true,
            formatOnPaste: true,
            suggestOnTriggerCharacters: true,
            acceptSuggestionOnEnter: 'on',
            quickSuggestions: true,
            folding: true,
            renderWhitespace: 'none',
            contextmenu: true,
            cursorBlinking: 'smooth',
            cursorSmoothCaretAnimation: 'on',
            smoothScrolling: true
          });

          // Add keyboard event listener to handle mobile keyboard
          window.addEventListener('keyboardDidShow', function() {
            editor.layout();
          });
          
          window.addEventListener('keyboardDidHide', function() {
            editor.layout();
          });

          // Expose functions for WebView communication
          window.getCode = function() {
            return editor ? editor.getValue() : '';
          };
          
          window.setLanguage = function(language) {
            if (editor) {
              monaco.editor.setModelLanguage(editor.getModel(), language);
              
              // Load language-specific features
              if (language === 'typescript') {
                fetch('https://cdn.jsdelivr.net/npm/typescript@4.9.5/lib/typescript.js')
                  .then(response => response.text())
                  .then(types => {
                    monaco.languages.typescript.typescriptDefaults.addExtraLib(
                      types,
                      'typescript.d.ts'
                    );
                  });
              }
              else if (language === 'python') {
                // Add Python-specific snippets
                monaco.languages.registerCompletionItemProvider('python', {
                  provideCompletionItems: function(model, position) {
                    return {
                      suggestions: [
                        {
                          label: 'pr',
                          kind: monaco.languages.CompletionItemKind.Snippet,
                          insertText: 'print($1)',
                          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                          documentation: 'Print to console'
                        },
                        {
                          label: 'def',
                          kind: monaco.languages.CompletionItemKind.Snippet,
                          insertText: 'def $1($2):\\n\\t$3',
                          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                          documentation: 'Define a function'
                        },
                        {
                          label: 'for',
                          kind: monaco.languages.CompletionItemKind.Snippet,
                          insertText: 'for $1 in $2:\\n\\t$3',
                          insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                          documentation: 'For loop'
                        }
                      ]
                    };
                  }
                });
              }
            }
          };

          // Notify React Native that editor is ready
          window.ReactNativeWebView.postMessage(JSON.stringify({
            type: 'editorReady',
            data: true
          }));
        });
      </script>
    </body>
    </html>
  `;

  useEffect(() => {
    // When the editor is ready, we can enable features
    if (isEditorReady && webViewRef.current) {
      // Set initial language
      changeLanguage(currentLanguage);
    }
  }, [isEditorReady]);

  // Function to run the code
  const runCode = () => {
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(`
        (function() {
          const code = window.getCode();
          try {
            // Capture console.log output
            const originalConsoleLog = console.log;
            const logs = [];
            
            console.log = function() {
              logs.push(Array.from(arguments).join(' '));
              originalConsoleLog.apply(console, arguments);
            };
            
            // Execute the code
            const result = new Function(code)();
            
            // Restore original console.log
            console.log = originalConsoleLog;
            
            // Prepare output
            let output = '';
            if (logs.length > 0) {
              output += logs.join('\\n');
            }
            
            if (result !== undefined) {
              if (output) output += '\\n';
              output += 'Return value: ' + result;
            }
            
            if (!output) {
              output = 'Code executed successfully!';
            }
            
            window.ReactNativeWebView.postMessage(JSON.stringify({
              type: 'output',
              data: output
            }));
          } catch (error) {
            window.ReactNativeWebView.postMessage(JSON.stringify({
              type: 'error',
              data: error.message
            }));
          }
          return true;
        })();
      `);
    }
  };

  // Function to change the language
  const changeLanguage = (language) => {
    setCurrentLanguage(language);
    if (webViewRef.current) {
      webViewRef.current.injectJavaScript(`
        (function() {
          window.setLanguage('${language}');
          return true;
        })();
      `);
    }
  };

  // Handle messages from WebView
  const handleMessage = (event) => {
    try {
      const message = JSON.parse(event.nativeEvent.data);
      if (message.type === "output") {
        // Navigate to output screen with the output data
        router.push({
          pathname: "/VSCodeOutput",
          params: { output: message.data },
        });
      } else if (message.type === "error") {
        router.push({
          pathname: "/VSCodeOutput",
          params: { output: `Error: ${message.data}` },
        });
      } else if (message.type === "editorReady") {
        setIsEditorReady(true);
      }
    } catch (error) {
      router.push({
        pathname: "/VSCodeOutput",
        params: { output: `Failed to parse message: ${error.message}` },
      });
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : null}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>VS Code Editor</Text>
          <Text style={styles.languageIndicator}>{currentLanguage}</Text>
        </View>

        <View style={styles.editorContainer}>
          <WebView
            ref={webViewRef}
            originWhitelist={["*"]}
            source={{ html: htmlContent }}
            style={styles.webView}
            onMessage={handleMessage}
            javaScriptEnabled={true}
            keyboardDisplayRequiresUserAction={false}
            automaticallyAdjustContentInsets={true}
            scrollEnabled={false}
            hideKeyboardAccessoryView={true}
            allowFileAccess={true}
            allowUniversalAccessFromFileURLs={true}
            focusable={true}
          />
        </View>

        <View style={styles.controlPanel}>
          <TouchableOpacity style={styles.runButton} onPress={runCode}>
            <Text style={styles.runButtonText}>▶ Run Code</Text>
          </TouchableOpacity>

          <View style={styles.languageSelector}>
            <TouchableOpacity
              style={[
                styles.languageButton,
                currentLanguage === "javascript" && styles.activeLanguageButton,
              ]}
              onPress={() => changeLanguage("javascript")}
            >
              <Text style={styles.languageButtonText}>JS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageButton,
                currentLanguage === "typescript" && styles.activeLanguageButton,
              ]}
              onPress={() => changeLanguage("typescript")}
            >
              <Text style={styles.languageButtonText}>TS</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageButton,
                currentLanguage === "python" && styles.activeLanguageButton,
              ]}
              onPress={() => changeLanguage("python")}
            >
              <Text style={styles.languageButtonText}>PY</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.languageButton,
                currentLanguage === "html" && styles.activeLanguageButton,
              ]}
              onPress={() => changeLanguage("html")}
            >
              <Text style={styles.languageButtonText}>HTML</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  safeContainer: {
    flex: 1,
  },
  header: {
    backgroundColor: "#252526",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  languageIndicator: {
    color: "#569cd6",
    fontSize: 14,
    fontWeight: "bold",
  },
  editorContainer: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  webView: {
    flex: 1,
    backgroundColor: "#1e1e1e",
  },
  controlPanel: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#252526",
  },
  runButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  runButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  languageSelector: {
    flexDirection: "row",
  },
  languageButton: {
    marginLeft: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "#333",
    borderRadius: 4,
  },
  activeLanguageButton: {
    backgroundColor: "#0078d7",
  },
  languageButtonText: {
    color: "#fff",
  },
});

export default VSCodeEditorScreen;
