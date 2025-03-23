import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import styles from "../styles/Roadmap.styles";

export default function roadmap() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*close*/}
      <Pressable
        onPress={() => router.push('/HomeScreen')}
        style={{
          flex: 0.1,
          zIndex: 2,
          alignItems: "center",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          width: "100%",
          backgroundColor: "#6c0ac1",
          flexDirection: "row",
          justifyContent: "flex-end",
          paddingHorizontal: 20,
        }}
      >
        <AntDesign name="close" size={24} color="white" />
      </Pressable>

      {/**content */}
      <ScrollView style={{ marginTop: 20, flex: 0.9 }}>
        {/**roadmap title */}
        <View
          style={{
            backgroundColor: "#6c0ac1",
            width: "60%",
            height: 30,
            alignItems: "center",
            borderRadius: 20,
            borderWidth: 2,
            alignSelf: "center",
            position: "absolute",
            zIndex: 2,
          }}
        >
          <Text style={{ fontSize: 20, color: "white" }}>ROADMAP</Text>
        </View>

        {/**course content */}
        <View
          style={{
            backgroundColor: "#ffd8f8",
            paddingHorizontal: 10,
            width: "90%",
            borderWidth: 2,
            alignSelf: "center",
            alignItems: "center",
            top: 15,
            borderRadius: 20,
          }}
        >
          {/**lofi icon */}
          <Image
            source={require("../assets/images/lofiforroadmap.png")}
            style={{ position: "absolute", right: 0, top: -2 }}
          />

          {/**course 1 */}
          <View style={styles.groupcourse}>
                    <Text style={styles.coursetitle}>FRONT-END COURSE</Text>
                    <TouchableOpacity style={styles.course} onPress={() => router.push("/FrontEndCourse")}>
                        <View style={styles.forCourseImage}>
                            <Image source={require('../assets/images/fe.png')} />
                        </View>
                        <View style={styles.forDecribtion}>
                            <Text style={styles.decribtion}>UI Design</Text>
                            <Text style={styles.decribtion}>Working with APIs</Text>
                            <Text style={styles.decribtion}>Acceseibility</Text>
                        </View>
                    </TouchableOpacity>
                </View>


          {/**course 2 */}
          <View style={styles.groupcourse}>
            <Text style={styles.coursetitle}>BACK-END COURSE</Text>
            <TouchableOpacity style={styles.course} onPress={() => router.push("/BackEndCourse")}>
              <View style={styles.forCourseImage}>
                <Image source={require("../assets/images/be.png")} />
              </View>
              <View style={styles.forDecribtion}>
                <Text style={styles.decribtion}>Database</Text>
                <Text style={styles.decribtion}>Security</Text>
                <Text style={styles.decribtion}>Deployment&Cloud</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/**course 3 */}
          <View style={styles.groupcourse}>
            <Text style={styles.coursetitle}>FULLSTACK COURSE</Text>
            <TouchableOpacity style={styles.course} onPress={() => router.push("/Fullstack")}>
              <View style={styles.forCourseImage}>
                <Image source={require("../assets/images/fullstack.png")} />
              </View>
              <View style={styles.forDecribtion}>
                <Text style={styles.decribtion}>UI + BE + API</Text>
                <Text style={styles.decribtion}>System architecture</Text>
                <Text style={styles.decribtion}>DevOps, CI/CD</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/**coming soon */}
          <View style={styles.groupcourse}>
            <Text style={styles.coursetitle}>COMING SOON...</Text>
            <View style={styles.course}>
              <View
                style={{
                  width: "60%",
                  justifyContent: "center",
                  alignItems: "center",
                  opacity: 0.5,
                }}
              >
                <Text>Devs are hard working</Text>
                <Image
                  source={require("../assets/images/lock.png")}
                  style={{ position: "absolute", opacity: 0.5 }}
                />
              </View>
              <View style={styles.forCourseImage}>
                <Image
                  source={require("../assets/images/dev.png")}
                  style={{ opacity: 0.5 }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
