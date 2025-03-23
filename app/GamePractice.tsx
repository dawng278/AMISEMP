import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useRouter } from "expo-router";
import Svg, { Path } from "react-native-svg";
import styles from "../styles/GamePractice.styles";

export default function lessons2() {
  const [activeTab, setActiveTab] = React.useState("Game");
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View
        style={[
          {
            backgroundColor: "#6C0AC1",
            width: "100%",
            height: 80,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          },
        ]}
      >
        <View style={styles.inf}>
          <FontAwesome5 name="crown" size={16} color="#ecd000" />
          <Text>999</Text>
          <View style={styles.plusInCircle}>
            <AntDesign name="plus" size={15} color="white" />
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "#fff",
            }}
          >
            Nightmare
          </Text>
          <View
            style={{
              backgroundColor: "rgba(211, 211, 211, 0.26)",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "#fff",
              }}
            >
              Choose your topic
            </Text>
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
      {/* Between layout */}
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-around",
          flex: 0.9,
        }}
      >
        <View style={styles.flexRow}>
          <View>
            <Image source={require("./../assets/images/Trophy.png")} />
          </View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.SquareButtons}>
            <View style={styles.retangleRectangle}>
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                4
              </Text>
            </View>
          </View>

          <View></View>
        </View>
        <View style={styles.flexRow}>
          <View style={styles.SquareButtons}>
            <View style={styles.retangleRectangle}>
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                3
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.flexRow}>
          <View>
            <Image
              source={require("./../assets/images/185--Streamline-The-Team.png")}
            />
          </View>
          <View style={styles.SquareButtons}>
            <View style={styles.retangleRectangle}>
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                2
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.flexRow}>
          <View
            style={[
              styles.SquareButtons,
              {
                left: 170,
                position: "absolute",
              },
            ]}
          >
            <View style={styles.retangleRectangle}>
              <Text
                style={{
                  fontSize: 30,
                }}
              >
                1
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
    </View>
  );
}
