import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Touchable, TouchableOpacity, View, ScrollView, AsyncStorage } from 'react-native';
import { useEffect, useState } from 'react';

export default function SingleMyProdukt(props) {
    const [hidden, setHidden] = useState(false);

    const akceptDelete = () => {
        props.deleteThat(props.id)
        setHidden(false)
    }
  return (
            <View style={styles.viewContainer}>
                <View style={styles.view1}>
                    <View style={styles.datas}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text style={styles.size}>{props.size}</Text><Text style={styles.sizeUnit}>g</Text>
                    </View>
                    <TouchableOpacity style={styles.delete} onPress={() => {setHidden(true)}}>
                        <Text style={styles.deleteText}>usuń</Text>
                    </TouchableOpacity>
                </View>
                {hidden?
                <View style={styles.askHidden}>
                    <Text>Czy na pewno chcesz usunąć?</Text>
                    <View style={styles.hiddenYesNo}>
                    <TouchableOpacity style={styles.deleteYes} onPress={akceptDelete}>
                        <Text style={styles.deleteText}>Tak</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteNo} onPress={() => {setHidden(false)}}>
                        <Text style={styles.deleteText}>Nie</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                :
                <View style={styles.rightRow}>
                    <View style={styles.rightColl}>
                        <View style={styles.makroData}>
                            <Text style={styles.makroName}>Białko</Text>
                            <View style={styles.unitData}>
                                <Text style={styles.unitValue}><Text style={{color:"#1e3799"}}>{props.protein}</Text> </Text><Text>g</Text>
                            </View>
                        </View>
                        <View style={styles.makroData}>
                            <Text style={styles.makroName}>Węglowodany</Text>
                            <View style={styles.unitData}>
                                <Text style={styles.unitValue}><Text style={{color:"#27ae60"}}>{props.carbo}</Text> </Text><Text>g</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.rightColl}>
                    <View style={styles.makroData}>
                            <Text style={styles.makroName}>Tłuszcze</Text>
                            <View style={styles.unitData}>
                                <Text style={styles.unitValue}><Text style={{color:"#e58e26"}}>{props.fats}</Text> </Text><Text>g</Text>
                            </View>
                        </View>
                        <View style={styles.makroData}>
                            <Text style={styles.makroName}>Energia</Text>
                            <View style={styles.unitData}>
                                <Text style={styles.unitValue}><Text style={{color:"#e55039"}}>{props.energy}</Text> </Text><Text>g</Text>
                            </View>
                        </View>
                    </View>
                </View>}
            </View>
  );
}

const styles = StyleSheet.create({
container:{
    height:"100%",
    width:"100%",
    backgroundColor:"white",
    alignItems:'center',
    flexDirection:"column",
    backgroundColor: "#f1f2f6",
    overflow:"scroll"
},
viewContainer:{
    marginTop:40,
    marginBottom: 10,
    width:"90%",
    paddingHorizontal:15,
    paddingVertical: 15,
    shadowColor:"#000",
    shadowOpacity:4.12,
    shadowRadius:300.46,
    elevation:9,
    borderRadius:30,
    backgroundColor:"white",
},
view1:{
    alignItems:'center',
    flexDirection:"row",
    justifyContent: "flex-start"
},
datas:{
    width:"75%",
    padding:4,
    flexDirection:"row",
    alignItems:'center',

},
delete:{
    width:"25%",
    padding:4,
    backgroundColor:"#ff3838",
    borderRadius:15,
},
name:{
    fontSize:18,
    fontWeight: "600",
    paddingRight:8,
},
deleteText:{
    fontSize:12,
    marginHorizontal: 6,
    marginVertical: 3,
    textAlign: "center",
    color:"white",

},
size:{
    fontSize:22,
    paddingRight:2,
    fontWeight: "300",
},
sizeUnit:{
    fontSize:18,
    paddingRight:8,
    color:"#4b4b4b",
    fontStyle: 'italic'
},
view2:{
    width:"100%",
    alignItems:'center',
    flexDirection:"row",
    justifyContent:"space-around",
},
rightRow:{
    marginTop:16,
    width:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:'center',

  },
  rightColl:{
    width:"100%",
    flexDirection:"row",
    justifyContent:"flex-start",
  },
  makroData:{
    width:"50%",
    flexDirection:"column",
    justifyContent:"flex-start",
    marginBottom:16
  },
  unitData:{
    flexDirection:"row",
    justifyContent:"flex-start",
    alignItems:'center',
  },
  makroName:{
    fontSize:12,
    fontWeight: "300",
  },
  unitValue:{
    fontSize:24,
    fontWeight: "300"
  },
  askHidden:{
    marginTop:16,
    width:"100%",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:'center',
  },
  hiddenYesNo:{
    marginTop:16,
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'center',
  },
  deleteYes:{
    borderRadius: 15,
    paddingHorizontal:30,
    paddingVertical: 5,
    backgroundColor: "#ff3838"
  },
  deleteNo:{
    borderRadius: 15,
    paddingHorizontal:30,
    paddingVertical: 5,
    backgroundColor: "#28a745"
  }
});
