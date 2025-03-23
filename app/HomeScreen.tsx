import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Octicons from "@expo/vector-icons/Octicons";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import { useRouter } from "expo-router";
import styles from "../styles/HomeScreen.styles";
import Svg, { Path } from "react-native-svg";

const home = () => {
  const [activeTab, setActiveTab] = React.useState("Home");
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#6c0ac1" }}>
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 20,
          }}
        >
          <Feather name="bell" size={24} color="black"/>
        </View>
        <Image
          source={require("../assets/images/SmartieSplitEyes.png")}
          style={{ bottom: -7, left: 40, position: "absolute", zIndex: 2 }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 0.8,
          width: "100%",
          borderTopLeftRadius: 35,
          borderTopRightRadius: 35,
        }}
      >
        <View style={{ alignSelf: "center", width: 280, marginVertical: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Choose your</Text>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>
            study roadmap
          </Text>
          <Pressable
            onPress={() => router.push('/Roadmap')}
            style={{
              width: "100%",
              borderRadius: 20,
              height: 45,
              borderWidth: 1,
              opacity: 0.3,
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              paddingHorizontal: 25,
              marginVertical: 5,
            }}
          >
            <Text>Improve your skill now</Text>
            <Entypo
              name="chevron-down"
              size={24}
              color="black"
            />
          </Pressable>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Explore Categories
          </Text>
        </View>
        <View style={{ alignSelf: "center" }}>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.options}
             onPress={() => router.push("/Leaderboard")}
            >
              <Image source={require("../assets/images/catidex.png")} />
              <Text style={styles.optiontitle}>Chatbot</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.options}
             onPress={() => router.push("/Leaderboard")}
            >
              <Image source={require("../assets/images/whitelist.png")} />
              <Text style={styles.optiontitle}>Whitelist</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity style={styles.options}
             onPress={() => router.push("/FrontEnd")}
            >
              <Image source={require("../assets/images/course.png")} />
              <Text style={styles.optiontitle}>Course</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.options}
              onPress={() => router.push("/Leaderboard")}
            >
              <Image source={require("../assets/images/learnboard.png")} />
              <Text style={styles.optiontitle}>LearnBoard</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity
          style={[styles.navItem, activeTab === "Home" && styles.activeNavItem]}
          onPress={() => setActiveTab("Home")}
        >
          <Svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M21.455 8.01002L14.905 2.77002C13.625 1.75002 11.625 1.74002 10.355 2.76002L3.80499 8.01002C2.86499 8.76002 2.29499 10.26 2.49499 11.44L3.75499 18.98C4.04499 20.67 5.61499 22 7.32499 22H17.925C19.615 22 21.215 20.64 21.505 18.97L22.765 11.43C22.945 10.26 22.375 8.76002 21.455 8.01002ZM13.375 18C13.375 18.41 13.035 18.75 12.625 18.75C12.215 18.75 11.875 18.41 11.875 18V15C11.875 14.59 12.215 14.25 12.625 14.25C13.035 14.25 13.375 14.59 13.375 15V18Z"
              fill="#020619"
            />
          </Svg>
          <Text
            style={[
              styles.navText,
              activeTab === "Home" && styles.activeNavText,
            ]}
          >
            Home
          </Text>
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
          <Ionicons
            name="chatbox-ellipses-outline"
            size={24}
            color="#A2A2A2"
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

export default home;
