import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import styles from "../styles/Message.styles";
import Ionicons from "@expo/vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const mesage = () => {
  const [activeTab, setActiveTab] = React.useState("Chat");
  const router = useRouter();
  return (
    <SafeAreaView>
      <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ 
       paddingBottom: 80 // Điều chỉnh để phù hợp với chiều cao của nav bar
     }}
      >
        <View style={{ alignItems: "center" }}>
          {/**title */}
          <View
            style={{
              padding: 20,
              width: "100%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                width: 25,
                height: 25,
                borderRadius: 20,
                backgroundColor: "black",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <FontAwesome name="user" size={15} color="white" />
            </View>
            <Text style={{ fontSize: 20, fontWeight: "medium" }}>Message</Text>
            <View
              style={{
                width: 25,
                height: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Feather name="edit" size={25} color="black" />
            </View>
          </View>

          {/**search bar */}
          <View
            style={{
              height: 45,
              width: "90%",
              borderWidth: 1,
              borderRadius: 20,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 10,
              justifyContent: "space-between",
              opacity: 0.3,
            }}
          >
            <View style={{ width: "10%" }}>
              <AntDesign name="search1" size={32} color="black" />
            </View>
            <View style={{ width: "85%" }}>
              <Text>Find group or conversation</Text>
            </View>
          </View>

          {/**user diplay */}
          <View style={{ width: "100%" }}>
            <ScrollView horizontal={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="plus" size={24} color="white" />
              </View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  marginVertical: 20,
                  marginHorizontal: 10,
                  backgroundColor: "gray",
                }}
              ></View>
            </ScrollView>
          </View>

          {/**chatbot */}
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Chatbot</Text>

            <View
              style={{
                width: "100%",
                height: 80,
                marginVertical: 15,
                borderRadius: 20,
                backgroundColor: "#f6f5f7",
                shadowColor: "black",
                elevation: 1,
              }}
            >
              <View
                style={{
                  width: "25%",
                  height: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: "gray",
                  }}
                ></View>
              </View>
            </View>
          </View>

          {/**friend */}
          <View style={{ width: "90%" }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>Friends</Text>
            <View style={{ width: "100%", marginTop: 20 }}>
              {/**list */}
              <Pressable
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "#f6f5f7",
                  shadowColor: "#000",
                  elevation: 2,
                }}
                onPress={() => router.push("/MessageBoxChat")}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "gray",
                    }}
                  ></View>
                </View>
              </Pressable>
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "#f6f5f7",
                  shadowColor: "#000",
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "gray",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "#f6f5f7",
                  shadowColor: "#000",
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "gray",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "#f6f5f7",
                  shadowColor: "#000",
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "gray",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "#f6f5f7",
                  shadowColor: "#000",
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "gray",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "#f6f5f7",
                  shadowColor: "#000",
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "gray",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "#f6f5f7",
                  shadowColor: "#000",
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "gray",
                    }}
                  ></View>
                </View>
              </View>
              <View
                style={{
                  width: "100%",
                  height: 80,
                  backgroundColor: "#f6f5f7",
                  shadowColor: "#000",
                  elevation: 2,
                }}
              >
                <View
                  style={{
                    width: "25%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 50,
                      backgroundColor: "gray",
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navItem, activeTab === "Home" && styles.activeNavItem]}
          onPress={() => router.push("/HomeScreen")}
        >
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M12.125 18V15"
              stroke="#A2A2A2"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M10.195 2.81997L3.26502 8.36997C2.48502 8.98997 1.98502 10.3 2.15502 11.28L3.48502 19.24C3.72502 20.66 5.08502 21.81 6.52502 21.81H17.725C19.155 21.81 20.525 20.65 20.765 19.24L22.095 11.28C22.255 10.3 21.755 8.98997 20.985 8.36997L14.055 2.82997C12.985 1.96997 11.255 1.96997 10.195 2.81997Z"
              stroke="#A2A2A2"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "Game" && styles.activeNavItem]}
          onPress={() => router.push("/Lesson")}
        >
          <Ionicons name="game-controller-outline" size={24} color="#A2A2A2" />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "Chat" && styles.activeNavItem]}
          onPress={() => router.push("/Message")}
        >
          <Ionicons name="chatbox-ellipses" size={24} color={"#000"}></Ionicons>
          <Text
            style={[
              styles.navText,
              activeTab === "Chat" && styles.activeNavText,
            ]}
          >
            Message
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.navItem,
            activeTab === "Profile" && styles.activeNavItem,
          ]}
          onPress={() => router.push("/Profile")}
        >
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M13.035 10.87C12.935 10.86 12.815 10.86 12.705 10.87C10.325 10.79 8.435 8.84 8.435 6.44C8.435 3.99 10.415 2 12.875 2C15.325 2 17.315 3.99 17.315 6.44C17.305 8.84 15.415 10.79 13.035 10.87Z"
              stroke="#A2A2A2"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <Path
              d="M8.035 14.56C5.615 16.18 5.615 18.82 8.035 20.43C10.785 22.27 15.295 22.27 18.045 20.43C20.465 18.81 20.465 16.17 18.045 14.56C15.305 12.73 10.795 12.73 8.035 14.56Z"
              stroke="#A2A2A2"
              stroke-width="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </Svg>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default mesage;
