import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import colors from "../styles/colors";
import defaultStyles from "../styles/defaultStyles";
import ListItem from "@/components/ListItem";
import { useState } from "react";

export default function Index() {
  const [selectedId, setSelectedId] = useState<string>('1');
  type dataType = {
    id: string; //unique identifier
    title: string; //text we see in floatlist
  };

  const DATA: dataType[] = [
    { id: "1", title: "First" },
    { id: "2", title: "Second" },
    { id: "3", title: "Third" },
    { id: "4", title: "Fourth" },
    { id: "5", title: "Fifth" },
  ];

  /*
  Declaring a function called selectedList that receives a param of type dataType that we will refer
  to  as 'item I can access the 
  */
  const selectedList = (item: dataType) => {
    setSelectedId(item.id);
    console.log("selected" + item.title);
  };

  return (
    <View style={defaultStyles.container}>
      <View style={defaultStyles.titleContainer}>
        <Text style={defaultStyles.title}>Insert Title Here</Text>
      </View>
      <View style={[defaultStyles.textContainer, { flex: 1 }]}>
        <View style={styles.flatlist}>
          <FlatList
            data={DATA}
            keyExtractor={(item: dataType) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => selectedList(item)}>
                <View style={[styles.titleContainer,
                  {
                    backgroundColor:
                    item.id ===selectedId ? colors.primary : colors.secondary
                  }
                ]}>
                  <Text style={[styles.titleContainer,
                    {color: item.id === selectedId ? colors.text.light : colors.text.dark}
                  ]}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    alignItems: "center",
  },
  titleContainer: {
    marginTop: 5,
    width: 300,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  titleText: {
    fontSize: 24,
    padding: 10,
  },
});
