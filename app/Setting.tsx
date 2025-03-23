import { Text, View, ScrollView, Switch, Pressable } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useRouter } from "expo-router";
import styles from "../styles/Setting.styles";

const setting = () => {
      const router = useRouter();
    
  const [swithcValue01, setSwitchValue01] = useState(false);
  const [swithcValue02, setSwitchValue02] = useState(false);

  const toggleSwitch01 = (value) => {
    setSwitchValue01(value);
  };
  const toggleSwitch02 = (value) => {
    setSwitchValue02(value);
  };
  return (
    <ScrollView style={styles.container}>
      {/*header*/}
      <View style={styles.header}>
        <Pressable 
        onPress={() => router.push("/Profile")}
        >
          <AntDesign
            name="left"
            size={24}
            color="black"
            style={{ flex: 1, paddingLeft: 10 }}
          />
        </Pressable>
        <View
          style={{ alignItems: "center", flex: 8, justifyContent: "center" }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Setting</Text>
        </View>
        <Text style={{ flex: 1 }}></Text>
      </View>

      {/*sound settings*/}
      <View style={styles.group}>
        <Text style={styles.justboldtext}>Sound Settings</Text>
        <View style={styles.withswitch}>
          <Text style={styles.justboldtext}>Music</Text>
          <Switch onValueChange={toggleSwitch01} value={swithcValue01} />
        </View>
        <View style={styles.withswitch}>
          <Text style={styles.justboldtext}>Sound Effect</Text>
          <Switch onValueChange={toggleSwitch02} value={swithcValue02} />
        </View>
      </View>

      {/*Account*/}
      <View style={styles.group}>
        <Text style={styles.justboldtext}>Account</Text>
        <View>
          <View style={styles.rectangle}>
            <View style={styles.withicons}>
              <AntDesign name="user" size={24} color="black" />
              <Text style={styles.inrectangle}>Edit profile</Text>
            </View>
            <View style={styles.withicons}>
              <Feather name="shield" size={24} color="black" />
              <Text style={styles.inrectangle}>Security</Text>
            </View>
            <View style={styles.withicons}>
              <Feather name="bell" size={24} color="black" />
              <Text style={styles.inrectangle}>Notifications</Text>
            </View>
            <View style={styles.withicons}>
              <AntDesign name="lock1" size={24} color="black" />
              <Text style={styles.inrectangle}>Privacy</Text>
            </View>
          </View>
        </View>
      </View>

      {/*support and about*/}
      <View style={styles.group}>
        <Text style={styles.justboldtext}>Support & About</Text>
        <View style={styles.rectangle}>
          <View style={styles.withicons}>
            <AntDesign name="minussquareo" size={24} color="black" />
            <Text style={styles.inrectangle}>My Subscribtion</Text>
          </View>
          <View style={styles.withicons}>
            <Feather name="help-circle" size={24} color="black" />
            <Text style={styles.inrectangle}>Help & Support</Text>
          </View>
          <View style={styles.withicons}>
            <AntDesign name="minuscircleo" size={24} color="black" />
            <Text style={styles.inrectangle}>Terms and Policies</Text>
          </View>
        </View>
      </View>

      {/*cache and cellular*/}
      <View style={styles.group}>
        <Text style={styles.justboldtext}>Cache & Cellular</Text>
        <View style={styles.rectangle}>
          <View style={styles.withicons}>
            <Entypo name="upload" size={24} color="black" />
            <Text style={styles.inrectangle}>Free up space</Text>
          </View>
          <View style={styles.withicons}>
            <Feather name="save" size={24} color="black" />
            <Text style={styles.inrectangle}>Data Saver</Text>
          </View>
        </View>
      </View>

      {/*actions*/}
      <View style={styles.group}>
        <Text style={styles.justboldtext}>Actions</Text>
        <View style={styles.rectangle}>
          <View style={styles.withicons}>
            <AntDesign name="flag" size={24} color="black" />
            <Text style={styles.inrectangle}>Report a problem</Text>
          </View>
          <View style={styles.withicons}>
            <AntDesign name="addusergroup" size={24} color="black" />
            <Text style={styles.inrectangle}>Add account</Text>
          </View>
          <View style={styles.withicons}>
            <MaterialIcons name="logout" size={24} color="black" />
            <Text style={styles.inrectangle}>Log out</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default setting;
