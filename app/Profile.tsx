import {
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Svg, { Path } from "react-native-svg";
import styles from "../styles/Profile.styles";

const profile = () => {
  const [activeTab, setActiveTab] = React.useState("Profile");
  const router = useRouter();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <Pressable style={styles.options}
        onPress={() => router.push("/Setting")}
      >
        <Ionicons name="settings" size={24} color="black" />
      </Pressable>
      <ScrollView
       showsVerticalScrollIndicator={false}
       showsHorizontalScrollIndicator={false}
       contentContainerStyle={{ 
        paddingBottom: 80 // Điều chỉnh để phù hợp với chiều cao của nav bar
      }}
       >
        {/*cover picture and avatar*/}
        <View style={{ alignItems: "center", height: 350 }}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocPUhGKpbuDEVQhUMsoDbCvpnCTfvIabLcw&s",
            }}
            style={styles.coverPicture}
          />
          <Image
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_November_2010-1a.jpg",
            }}
            style={styles.avatar}
          ></Image>
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              position: "absolute",
              bottom: 0,
            }}
          >
            Name
          </Text>
        </View>

        {/*describtion*/}
        <View
          style={{
            backgroundColor: "#d9d9d9",
            borderRadius: 20,
            width: 340,
            height: 215,
            alignSelf: "center",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>DESCRIBTION</Text>
          <View>
            <Text>Hi I'm cat</Text>
          </View>
        </View>

        {/*in progress */}
        <View>
          <Text style={styles.title}>IN PROGRESS</Text>
          <ScrollView horizontal={true} style={styles.groupselection}
           showsVerticalScrollIndicator={false}
           showsHorizontalScrollIndicator={false}
           >
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.title}>COMPLETED</Text>
          <ScrollView horizontal={true} style={styles.groupselection}
           showsVerticalScrollIndicator={false}
           showsHorizontalScrollIndicator={false}
          >
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
          </ScrollView>
        </View>
        <View>
          <Text style={styles.title}>SOMETHING ELSE</Text>
          <ScrollView horizontal={true} style={styles.groupselection}
           showsVerticalScrollIndicator={false}
           showsHorizontalScrollIndicator={false}
          >
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
            <View style={styles.selection}></View>
          </ScrollView>
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
              stroke-width="1.5"
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
          <Ionicons name="chatbox-ellipses-outline" size={24} color={"#A2A2A2"}></Ionicons>
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
              d="M8.125 6.75C8.125 4.40614 10.0311 2.5 12.375 2.5C14.7185 2.5 16.6245 4.40562 16.625 6.74903C16.6155 9.04858 14.8218 10.9052 12.536 10.99H12.536H12.5359H12.5359H12.5359H12.5359H12.5358H12.5358H12.5358H12.5357H12.5357H12.5357H12.5356H12.5356H12.5356H12.5356H12.5355H12.5355H12.5355H12.5354H12.5354H12.5354H12.5354H12.5353H12.5353H12.5353H12.5352H12.5352H12.5352H12.5351H12.5351H12.5351H12.5351H12.535H12.535H12.535H12.5349H12.5349H12.5349H12.5349H12.5348H12.5348H12.5348H12.5347H12.5347H12.5347H12.5346H12.5346H12.5346H12.5346H12.5345H12.5345H12.5345H12.5344H12.5344H12.5344H12.5344H12.5343H12.5343H12.5343H12.5342H12.5342H12.5342H12.5341H12.5341H12.5341H12.5341H12.534H12.534H12.534H12.5339H12.5339H12.5339H12.5338H12.5338H12.5338H12.5338H12.5337H12.5337H12.5337H12.5336H12.5336H12.5336H12.5335H12.5335H12.5335H12.5335H12.5334H12.5334H12.5334H12.5333H12.5333H12.5333H12.5332H12.5332H12.5332H12.5331H12.5331H12.5331H12.5331H12.533H12.533H12.533H12.5329H12.5329H12.5329H12.5328H12.5328H12.5328H12.5327H12.5327H12.5327H12.5326H12.5326H12.5326H12.5325H12.5325H12.5325H12.5325H12.5324H12.5324H12.5324H12.5323H12.5323H12.5323H12.5322H12.5322H12.5322H12.5321H12.5321H12.5321H12.532H12.532H12.532H12.5319H12.5319H12.5319H12.5318H12.5318H12.5318H12.5317H12.5317H12.5316H12.5316H12.5316H12.5315H12.5315H12.5315H12.5314H12.5314H12.5314H12.5313H12.5313H12.5313H12.5312H12.5312H12.5312H12.5311H12.5311H12.531H12.531H12.531H12.5309H12.5309H12.5309H12.5308H12.5308H12.5308H12.5307H12.5307H12.5306H12.5306H12.5306H12.5305H12.5305H12.5305H12.5304H12.5304H12.5303H12.5303H12.5303H12.5302H12.5302H12.5301H12.5301H12.5301H12.53H12.53H12.5299H12.5299H12.5299H12.5298H12.5298H12.5297H12.5297H12.5297H12.5296H12.5296H12.5295H12.5295H12.5295H12.5294H12.5294H12.5293H12.5293H12.5292H12.5292H12.5292H12.5291H12.5291H12.529H12.529H12.5289H12.5289H12.5289H12.5288H12.5288H12.5287H12.5287H12.5286H12.5286H12.5285H12.5285H12.5285H12.5284H12.5284H12.5283H12.5283H12.5282H12.5282H12.5281H12.5281H12.528H12.528H12.5279H12.5279H12.5279H12.5278H12.5278H12.5277H12.5277H12.5276H12.5276H12.5275H12.5275H12.5274H12.5274H12.5273H12.5273H12.5272H12.5272H12.5271H12.5271H12.527H12.527H12.5269H12.5269H12.5268H12.5268H12.5267H12.5267H12.5266H12.5266H12.5265H12.5264H12.5264H12.5263H12.5263H12.5262H12.5262H12.5261H12.5261H12.526H12.526H12.5259H12.5259H12.5258H12.5257H12.5257H12.5256H12.5256H12.5255H12.5255H12.5254H12.5253H12.5253H12.5252H12.5252H12.5251H12.5251H12.525H12.5249H12.5248H12.5246H12.5245H12.5244H12.5243H12.5242H12.5241H12.524H12.5238H12.5237H12.5236H12.5235H12.5234H12.5233H12.5232H12.523H12.5229H12.5228H12.5227H12.5226H12.5225H12.5224H12.5223H12.5221H12.522H12.5219H12.5218H12.5217H12.5216H12.5215H12.5214H12.5213H12.5211H12.521H12.5209H12.5208H12.5207H12.5206H12.5205H12.5204H12.5203H12.5202H12.5201H12.5199H12.5198H12.5197H12.5196H12.5195H12.5194H12.5193H12.5192H12.5191H12.519H12.5189H12.5188H12.5187H12.5186H12.5185H12.5183H12.5182H12.5181H12.518H12.5179H12.5178H12.5177H12.5176H12.5175H12.5174H12.5173H12.5172H12.5171H12.517H12.5169H12.5168H12.5167H12.5166H12.5165H12.5164H12.5163H12.5162H12.5161H12.516H12.5159H12.5158H12.5157H12.5156H12.5155H12.5154H12.5153H12.5152H12.5151H12.515H12.5149H12.5148H12.5147H12.5146H12.5145H12.5144H12.5143H12.5142H12.5141H12.514H12.5139H12.5138H12.5137H12.5136H12.5135H12.5134H12.5133H12.5132H12.5131H12.513H12.5129H12.5128H12.5127H12.5126H12.5125H12.5124H12.5123H12.5122H12.5121H12.512H12.5119H12.5118H12.5118H12.5117H12.5116H12.5115H12.5114H12.5113H12.5112H12.5111H12.511H12.5109H12.5108H12.5107H12.5106H12.5105H12.5104H12.5103H12.5102H12.5101H12.5101H12.51H12.5099H12.5098H12.5097H12.5096H12.5095H12.5094H12.5093H12.5092H12.5091H12.509H12.5089H12.5088H12.5088C12.4183 10.9796 12.3242 10.9808 12.2375 10.989C9.90038 10.8911 8.125 9.03575 8.125 6.75Z"
              fill="#061237"
              stroke="#000"
            />
            <Path
              d="M7.57371 20.1748L7.57234 20.1739C6.41339 19.4012 5.83499 18.4016 5.83499 17.3799C5.83499 16.3578 6.41375 15.3484 7.58203 14.5661C8.88859 13.7017 10.6268 13.2549 12.3875 13.2549C14.1488 13.2549 15.8817 13.702 17.1776 14.5659C18.333 15.3362 18.9059 16.3355 18.915 17.3619C18.9142 18.3934 18.3353 19.3927 17.1759 20.1751C15.875 21.0483 14.1377 21.4999 12.375 21.4999C10.612 21.4999 8.8746 21.0482 7.57371 20.1748Z"
              fill="#061237"
              stroke="#000"
            />
          </Svg>
          <Text
            style={[
              styles.navText,
              activeTab === "Profile" && styles.activeNavText,
            ]}
          >
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default profile;
