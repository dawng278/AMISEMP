import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import styles from '../styles/Leaderboard.styles'


// Định nghĩa kiểu cho props
interface LeaderboardItemProps {
  rank: number;
  name: string;
  points: number;
  color: string;
}


// Component LeaderboardItem
const LeaderboardItem: React.FC<LeaderboardItemProps> = ({
  rank,
  name,
  points,
  color,
}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.itemContainer, { backgroundColor: color }]}>
        <View style={styles.innerContainer}>
          <Text style={styles.rank}>{rank}
           
          </Text>
          <Image
            source={require("../assets/images/Photo.png")}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.points}>{points} pts</Text>
        </View>
      </View>
    </View>
  );
};


// Dữ liệu mẫu
const leaderboardData = [
  { rank: 1, name: "Iman", points: 2019, color: "#FFC107" },
  { rank: 2, name: "Vatani", points: 1932, color: "#F5F5F5" },
  { rank: 3, name: "Jonathan", points: 1431, color: "#FF9800" },
  { rank: 4, name: "User", points: 1300, color: 'rgba(158, 144, 144, 0.68)' }
];


// Component Leaderboard
const Leaderboard = () => {
  return (




   
    <View style={styles.mainContainer}>
      <FlatList
        data={leaderboardData}
        renderItem={({ item }) => (
          <LeaderboardItem
            rank={item.rank}
            name={item.name}
            points={item.points}
            color={item.color}
          />
        )}
        keyExtractor={(item) => item.rank.toString()}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};


// Component chính Lesson
export default function Lesson() {
  const [loaded] = useFonts({
    "AnticDidone-Regular": require("../assets/fonts/AnticDidone-Regular.ttf"),
    "NATS-Regular": require("../assets/fonts/NATS-Regular.ttf"),
  });


  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);


  if (!loaded) {
    return null;
  }


  return (
    <View
      style={{
        backgroundColor: "rgb(97, 0, 201)",
        flex: 1,
      }}
    >
      {/* Header */}
      <View style={{ position: "relative" }}>
        <Image
          source={require("../assets/images/Back.png")}
          style={{
            position: "absolute",
            top: 65,
            left: 30,
            width: 20,
            height: 30,
          }}
        />
        <Text
          style={{
            position: "absolute",
            top: 43,
            left: 0,
            right: 0,
            textAlign: "center",
            fontSize: 30,
            color: "#fff",
            fontFamily: "NATS-Regular",
          }}
        >
          Leaderboard
        </Text>
        <Image
          source={require("../assets/images/Share.png")}
          style={{
            position: "absolute",
            left: 290,
            top: 60,
          }}
        />
      </View>


      {/* Tabs: Today, Week, Month */}
      <View
        style={{ flexDirection: "row", justifyContent: "center", marginTop: 130 }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "rgba(39, 24, 59, 0.34)",
            paddingHorizontal: 30,
            borderRadius: 30,
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              fontSize: 19,
              color: "#fff",
              fontFamily: "NATS-Regular",
            }}
          >
            Today
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            paddingHorizontal: 30,
            borderRadius: 30,
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              fontSize: 19,
              color: "#fff",
              fontFamily: "NATS-Regular",
            }}
          >
            Week
          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={{
            paddingHorizontal: 30,
            borderRadius: 30,
            paddingVertical: 6,
          }}
        >
          <Text
            style={{
              fontSize: 19,
              color: "#fff",
              fontFamily: "NATS-Regular",
            }}
          >
            Month
          </Text>
        </TouchableOpacity>
      </View>


      {/* Top 3 Players */}
      <View
        style={{ flexDirection: "row", justifyContent: "center", marginTop: 100 }}
      >
        {/* Rank 2 */}
        <View style={{ position: "relative", paddingHorizontal: 20 }}>
          <View
            style={{
              padding: 50,
              backgroundColor: "rgb(42, 13, 46)",
              position: "absolute",
              top: -11,
              left: 4,
              paddingHorizontal: 35,
              paddingVertical: 35,
              borderRadius: 90,
              borderWidth: 6,
              borderColor: "rgb(255, 255, 255)",
            }}
          />
          <Image
            source={require("../assets/images/profile.png")}
            style={{
              borderRadius: 50,
              width: 50,
              height: 50,
              top: 2,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/Rank 2.png")}
              style={{
                top: 15,
                width: 30,
                height: 30,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 75,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontFamily: "NATS-Regular",
              }}
            >
              User
            </Text>
            <Text
              style={{
                color: "rgba(255, 255, 255, 0.64)",
                top: -20,
                fontSize: 20,
                fontFamily: "NATS-Regular",
              }}
            >
              Level ?
            </Text>
          </View>
        </View>


        {/* Rank 1 */}
        <View style={{ position: "relative", paddingHorizontal: 20 }}>
          <View
            style={{
              padding: 50,
              backgroundColor: "rgb(42, 13, 46)",
              position: "absolute",
              top: -25,
              left: 4,
              paddingHorizontal: 50,
              paddingVertical: 50,
              borderRadius: 90,
              borderWidth: 6,
              borderColor: "rgb(255, 217, 2)",
            }}
          />
          <Image
            source={require("../assets/images/profile.png")}
            style={{
              borderRadius: 50,
              paddingHorizontal: 40,
              paddingVertical: 40,
              top: -9,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/Rank 1.png")}
              style={{
                top: 30,
                width: 30,
                height: 30,
              }}
            />
            <Image
              source={require("../assets/images/Crown.png")}
              style={{
                top: -150,
                width: 80,
                height: 80,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 95,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 21,
                fontFamily: "NATS-Regular",
              }}
            >
              User
            </Text>
            <Text
              style={{
                color: "rgba(255, 255, 255, 0.64)",
                fontSize: 21,
                top: -20,
                fontFamily: "NATS-Regular",
              }}
            >
              Level ?
            </Text>
          </View>
        </View>


        {/* Rank 3 */}
        <View style={{ position: "relative", paddingHorizontal: 20 }}>
          <View
            style={{
              padding: 50,
              backgroundColor: "rgb(42, 13, 46)",
              position: "absolute",
              top: -11,
              left: 4,
              paddingHorizontal: 35,
              paddingVertical: 35,
              borderRadius: 90,
              borderWidth: 6,
              borderColor: "rgb(194, 126, 0)",
            }}
          />
          <Image
            source={require("../assets/images/profile.png")}
            style={{
              borderRadius: 50,
              width: 50,
              height: 50,
              top: 2,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 40,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/images/Rank 3.png")}
              style={{
                width: 30,
                height: 30,
                top: 15,
              }}
            />
          </View>
          <View
            style={{
              position: "absolute",
              top: 75,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontFamily: "NATS-Regular",
              }}
            >
              User
            </Text>
            <Text
              style={{
                color: "rgba(255, 255, 255, 0.64)",
                fontSize: 20,
                top: -20,
                fontFamily: "NATS-Regular",
              }}
            >
              Level ?
            </Text>
          </View>
        </View>
      </View>


      {/* Thêm danh sách Leaderboard từ FlatList */}
      <Leaderboard />
    </View>
  );
}


