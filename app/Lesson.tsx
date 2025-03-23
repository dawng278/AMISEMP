import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg";
import { useRouter } from "expo-router";
import styles from "../styles/Lesson.styles";

const lessons = () => {
  const [activeTab, setActiveTab] = React.useState("Game");
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: "#6c0ac1", flex: 1 }}>
      {/**part 1 */}
      <View style={{ flex: 0.1, flexDirection: "row" }}>
        <View style={styles.inf}>
          <FontAwesome5 name="crown" size={16} color="#ecd000" />
          <Text>999</Text>
          <View style={styles.plusInCircle}>
            <AntDesign name="plus" size={15} color="white" />
          </View>
        </View>
        <View style={styles.inf}>
          <AntDesign name="heart" size={20} color="red" />
          <Text>5/5</Text>
          <View style={styles.plusInCircle}>
            <AntDesign name="plus" size={15} color="white" />
          </View>
        </View>
      </View>

      {/**part 2 */}
      <View
        style={{
          flex: 0.9,
          backgroundColor: "#fff",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          alignItems: "center",
        }}
      >
        {/**profile */}
        <ImageBackground
          source={require("../assets/images/backgroundprofile.png")}
          style={{
            width: 305,
            height: 165,
            marginVertical: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View style={{ width: "25%" }}>
            <Image source={require("../assets/images/decorateprofile.png")} />
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                backgroundColor: "#fff",
                right: 0,
                top: 30,
              }}
            >
              <AntDesign name="user" size={24} color="black" />
            </View>
          </View>
          <View style={{ width: "70%", justifyContent: "center" }}>
            <View style={{ width: "87.5%" }}>
              <Text style={{ marginVertical: 4, color: "white" }}>
                UserName:
              </Text>
              <Text style={{ marginVertical: 4, color: "white" }}>Rank:</Text>
              <Text style={{ marginVertical: 4, color: "white" }}>
                Description
              </Text>
              <View style={{ width: "100%" }}>
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ color: "white" }}>Level: 0</Text>
                  <Text style={{ color: "white" }}>0%</Text>
                </View>
                <View
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    height: 25,
                    borderRadius: 50,
                  }}
                >
                  <View
                    style={{
                      width: "20%",
                      backgroundColor: "#b700ff",
                      height: 25,
                      borderRadius: 50,
                      left: 0,
                    }}
                  ></View>
                </View>
              </View>
            </View>
          </View>
        </ImageBackground>

        {/**choose difficulty */}
        <View style={{ width: "95%" }}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Choose difficulty
          </Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Pressable
                style={{
                  width: 145,
                  height: 145,
                  borderWidth: 2,
                  borderColor: "#38e009",
                  backgroundColor: "#d4ffca",
                  borderRadius: 15,
                  margin: 10,
                  alignItems: "center",
                }}
                onPress={() => router.push("/GamePractice")}
                >
                <Image source={require("../assets/images/practice.png")} />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  Practice
                </Text>
              </Pressable>
              <View
                style={{
                  width: 145,
                  height: 145,
                  borderWidth: 2,
                  borderColor: "#c40000",
                  backgroundColor: "#f9c6c6",
                  borderRadius: 15,
                  margin: 10,
                  alignItems: "center",
                }}
              >
                <Image source={require("../assets/images/nightmare.png")} />
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    position: "absolute",
                    bottom: 0,
                  }}
                >
                  Nightmare
                </Text>
              </View>
            </View>
            <View
              style={{
                borderWidth: 2,
                width: 310,
                height: 145,
                borderRadius: 15,
                borderColor: "#ffea00",
                backgroundColor: "#fffbca",
                marginVertical: 10,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "90%",
                }}
              >
                <Image source={require("../assets/images/startLeague1.png")} />
                <Image source={require("../assets/images/startLeague2.png")} />
              </View>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  position: "absolute",
                  bottom: 0,
                }}
              >
                Start League
              </Text>
            </View>
          </View>
        </View>
      </View>
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
          <Ionicons name="game-controller" size={24} color={"#000"}></Ionicons>
          <Text
            style={[
              styles.navText,
              activeTab === "Game" && styles.activeNavText,
            ]}
          >
            Games
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.navItem, activeTab === "Chat" && styles.activeNavItem]}
          onPress={() => router.push("/Message")}
        >
          <Ionicons
            name="chatbox-ellipses-outline"
            size={24}
            color={"#A2A2A2"}
          ></Ionicons>
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

export default lessons;
