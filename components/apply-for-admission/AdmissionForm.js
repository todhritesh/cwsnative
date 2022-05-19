import { View,  Text , StyleSheet , TextInput , FlatList , TouchableOpacity , Button } from 'react-native'
import React,{useState} from 'react'
import CustomTextFields from './CustomTextFields'
import DropDownPicker from 'react-native-dropdown-picker';



const AdmissionForm = () => {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Male', value: 'm'},
        {label: 'Female', value: 'f'},
        {label: 'Others', value: 'o'}
    ]);
    const styles = StyleSheet.create({
        form:{
            paddingHorizontal:10,
        },
        formControl:{
            padding:5,
            marginVertical:5
        },
        formLabel:{
            fontSize:17,
            color:'black',
            fontWeight:"400",
            
        },
        formInput:{
            borderColor:"lightgrey",
            borderWidth:2,
            borderRadius:10,
            paddingLeft:10,
            fontSize:18,
            marginTop:5,
            color:"black",
        }
    })
    console.log(value)
  return (
    <View style={styles.form}>
        <FlatList
        
            ListHeaderComponent={
            <>
                <CustomTextFields label="Name" placeholder="Name..." />
                <CustomTextFields label="Mother's Name" placeholder="Mother's Name..." />
                <CustomTextFields label="Father's Name" placeholder="Father's Name..." />
                <CustomTextFields keyboardType="numeric" label="Contact Number" placeholder="Contact Number..." />
                <CustomTextFields label="Email" placeholder="Email..." />
                <CustomTextFields label="Education" placeholder="Education..." />
            </>
            }
            data={[{}]}
            renderItem={()=>
            <View style={{...styles.formControl,opacity:1}}>
                <Text style={styles.formLabel}>Gender</Text>
                <DropDownPicker
                    listItemContainerStyle={{borderWidth:1,borderColor:"#f2f2f2"}}
                    dropDownDirection="TOP"
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    placeholderStyle={{color:"grey"}}
                    placeholder="Select an option"
                    style={{backgroundColor:"#f2f2f2",borderColor:"lightgrey",borderWidth:2,borderRadius:10,}}
                />
            </View>

            }

            ListFooterComponent={
            <>
                <View style={styles.formControl}>
                    <Text style={styles.formLabel}>Address</Text>
                    <TextInput  multiline={true} numberOfLines={3} placeholder="Address..." style={styles.formInput} />
                </View>

                <View style={styles.formControl}>
                    <TouchableOpacity>
                        <Button title='Submit Form' />
                    </TouchableOpacity>
                </View>
            </>
            }
        />
    </View>
  )
}

export default AdmissionForm