import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
  Alert,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import styles from "../styles/FrontEnd.styles";

export default function Lesson() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Playlist");
  const [Save, setSave] = useState(false);
  const [completedLessons, setCompletedLessons] = useState([]);

  const lessons = [
    { id: "1", title: "Lesson 1: Introduction" },
    { id: "2", title: "Lesson 2: Basics" },
    { id: "3", title: "Lesson 3: Advanced Topics" },
    { id: "4", title: "Lesson 4: Summary" },
    { id: "5", title: "Lesson 5: FB" },
    { id: "6", title: "Lesson 6: More Topics" },
    { id: "7", title: "Lesson 7: Final Review" },
  ];

  const handleLessonPress = (Lesson) => {
    if (
      completedLessons.includes(Lesson.id) ||
      Lesson.id === lessons[0].id ||
      completedLessons.includes((parseInt(Lesson.id) - 1).toString())
    ) {
      Alert.alert("Lesson Selected", `You selected: ${Lesson.title}`);
    } else {
      Alert.alert("Locked", "Complete the previous lesson first.");
    }
  };

  const handleStartNow = () => {
    if (completedLessons.length < lessons.length) {
      setCompletedLessons([
        ...completedLessons,
        lessons[completedLessons.length].id,
      ]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Pressable onPress={() => router.push("/Profile")}>
            <Ionicons
              name="chevron-back"
              size={25}
              color="black"
              style={styles.vector}
            />
          </Pressable>
          <Text style={styles.title}>Name Course</Text>
          <Image
            source={require("../assets/images/option.png")}
            style={styles.option}
          />
        </View>

        <View style={styles.img} />

        <View style={styles.contentWrapper}>
          <Text style={styles.content}>
            TOPIC COURSE{"\n"}COURSE BLAH BLAH BLAH
          </Text>
          <Text style={styles.by}>
            Created by <Text style={styles.catidex}>Catidex</Text>
          </Text>
        </View>

        <View style={styles.rate}>
          <AntDesign name="staro" size={24} color="black" style={styles.icon} />
          <Text style={styles.rateText}>4.9</Text>
          <AntDesign
            name="clockcircleo"
            size={24}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.rateText}>1000 Hours</Text>
        </View>

        <View style={styles.tab}>
          {["Playlist", "Description"].map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tabButton,
                activeTab === tab ? styles.activeTab : styles.inactiveTab,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab ? styles.activeText : styles.inactiveText,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.listContainer}>
          {activeTab === "Playlist" ? (
            <ScrollView style={styles.scrollList} nestedScrollEnabled={true}>
              <FlatList
                data={lessons}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={[
                      styles.lessonItem,
                      (completedLessons.includes(item.id) ||
                        item.id === lessons[0].id ||
                        completedLessons.includes(
                          (parseInt(item.id) - 1).toString()
                        )) &&
                        styles.lessonItemActive,
                    ]}
                    onPress={() => handleLessonPress(item)}
                    activeOpacity={0.3}
                  >
                    <View style={styles.lessonContent}>
                      {completedLessons.includes(item.id) ? (
                        <AntDesign
                          name="checkcircle"
                          size={20}
                          color="#7FF274"
                          style={styles.lessonIcon}
                        />
                      ) : (
                        <AntDesign
                          name="play"
                          size={20}
                          color="#6A42F4"
                          style={styles.lessonIcon}
                        />
                      )}
                      <Text style={styles.lessonText}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                scrollEnabled={false}
              />
            </ScrollView>
          ) : (
            <View style={styles.description}>
              <Text style={styles.descText}>
                This is the course description. It contains all the necessary
                details about the course.
              </Text>
            </View>
          )}
        </View>

        <View style={styles.start}>
          <TouchableOpacity
            style={[styles.save, Save && styles.saveActive]}
            onPress={() => setSave(!Save)}
          >
            <Image
              source={require("../assets/images/save.png")}
              style={[styles.bookSave, Save && styles.saveActive]}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.startNow} onPress={handleStartNow}>
            <Text style={styles.startNowText}>Start Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
