// import { VStack } from 'native-base';

import React from 'react'
import { Image, View, SafeAreaView, StatusBar, Text,  ScrollView, StyleSheet,Button } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const arr = [
    {
        id:1,
        title: "Amityville Laundary",
        IdNumber: "45644",
        ItemNumber: 3,
        Price: 4500,
        status:"Success",
        StatusImage :{
            uri:"https://s3-alpha-sig.figma.com/img/a185/d32f/e30cac8dbecff03d6f099dc7be490832?Expires=1677456000&Signature=GVfoSFv2oEWycl0KE92w5w7K~JYpPYkgwhVNzXonIj8JzaAkKnImekypVJastCy40hKEEDrVG0DMypJ5Yvl5ZmE-EzXutoCFYw~hc4qiDqTniJLVICcdLYg3wGeQIMakLfR7OdtTObP3YK3WZq-zAdst0jFgCDYg7-Rv2HuUjtSloeToCtm9uvcSr4VVa91AyJL84Ej5Nt0MTdsiTcDM1hgkF2p6qYmB2rUlZMzrVZEs0u7NtbdJhCSGfvE~N3vui3x0tZ8SgG1fnEE8UqaGE37gYViVipiDEMYkp~Z9uUHboqx247nMEPdFRLvkoAZxPGjmCVkeLvJMk5MaWBQW-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
        orderImage:{
            uri: "https://s3-alpha-sig.figma.com/img/f6df/fdb9/4fa297e1952bb28c399bbf9545af9c74?Expires=1677456000&Signature=iI2WSXILqdHqVSa8PnB6zH~NDk3XJn-n0-9m9HSkwsy294KaO~puDgOidmJpd2ujNcalJhpVXvlJHG0Pr-SJBJZZ3BUWz0i8Xh89j8c7XA6EKi-Yqz2C867YSKYZmJWmEH-EeQgBC1s3pUWLMazyoa8~zbKaj6FYgtlgIRhyduKH8bsW0cDbDGTh72B4DeLiGr-1hY5bkXtHwMGtfpdkXknXsgTg20ZnOtjnzenDtVcRNRH4z9oSIkQc7u~E6URulDvUKQ0Q~PTLBH8FbbvklwcvRNvNn5osfwo1sa14hxQ1HLrPvHis0jVHWLpez3VVcypZDXu54Tz9ILxv0B0x0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}
        
},
{
    id:1,
    title: "Amityville Laundary",
    IdNumber: "45644",
    ItemNumber: 3,
    Price: 4500,
    status:"Pending",
    orderImage: {
        uri:"https://s3-alpha-sig.figma.com/img/f6df/fdb9/4fa297e1952bb28c399bbf9545af9c74?Expires=1677456000&Signature=iI2WSXILqdHqVSa8PnB6zH~NDk3XJn-n0-9m9HSkwsy294KaO~puDgOidmJpd2ujNcalJhpVXvlJHG0Pr-SJBJZZ3BUWz0i8Xh89j8c7XA6EKi-Yqz2C867YSKYZmJWmEH-EeQgBC1s3pUWLMazyoa8~zbKaj6FYgtlgIRhyduKH8bsW0cDbDGTh72B4DeLiGr-1hY5bkXtHwMGtfpdkXknXsgTg20ZnOtjnzenDtVcRNRH4z9oSIkQc7u~E6URulDvUKQ0Q~PTLBH8FbbvklwcvRNvNn5osfwo1sa14hxQ1HLrPvHis0jVHWLpez3VVcypZDXu54Tz9ILxv0B0x0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
    StatusImage: {
        uri:"https://s3-alpha-sig.figma.com/img/33a3/a4ea/4c1d427aa5c8b8c88f1dd292ea353f30?Expires=1677456000&Signature=paoQUsxdFeYzRRIH7KV-VTuYny7MYno5wKVXsb-9o2xi0wcoV2uZklYQVXudzw8cQJ1-9KHbaF3mw7mZe8zRgriXYLaSh1BJjY3Z17j0NiOMe-jb6qPz3qL0LBF2CgNNuS3mDtC9cuIr-GpnOUmgVGer20wdLVj7bAsLzqZIyp3e8oExxqwHltZ3-HxEgM-VMLRsaZ-M6QnlXixT7~3-MnCbwVNhvW2IqLeqSat0iUbyypsF37aiDpu9Y8sx0FRsD5QjI60BcEsmwKxYEw8bh6crmN7-7zgneo4RAJB2r9BNRrAPnKJoPzS9j9~rk7bboKaZJDl0fgKx7YB5wGjK5w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}

},
{
    id:1,
    title: "Amityville Laundary",
    IdNumber: "45644",
    ItemNumber: 3,
    Price: 4500,
    status:"Failed",
    orderImage: {
        uri:"https://s3-alpha-sig.figma.com/img/f6df/fdb9/4fa297e1952bb28c399bbf9545af9c74?Expires=1677456000&Signature=iI2WSXILqdHqVSa8PnB6zH~NDk3XJn-n0-9m9HSkwsy294KaO~puDgOidmJpd2ujNcalJhpVXvlJHG0Pr-SJBJZZ3BUWz0i8Xh89j8c7XA6EKi-Yqz2C867YSKYZmJWmEH-EeQgBC1s3pUWLMazyoa8~zbKaj6FYgtlgIRhyduKH8bsW0cDbDGTh72B4DeLiGr-1hY5bkXtHwMGtfpdkXknXsgTg20ZnOtjnzenDtVcRNRH4z9oSIkQc7u~E6URulDvUKQ0Q~PTLBH8FbbvklwcvRNvNn5osfwo1sa14hxQ1HLrPvHis0jVHWLpez3VVcypZDXu54Tz9ILxv0B0x0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"},
    StatusImage:{
        uri: "https://s3-alpha-sig.figma.com/img/61f8/76f3/afa9246589d5f53a47334e3222264ac3?Expires=1677456000&Signature=H9hBB0hL6S0TjSqVFLElpsJnHhPT5Pm5uSMZ0UOM6WZss6e~Gl0qQ5pwX527ShMkemCdqXmvrdp297RLDe~NVHauSrH~eYL0aPfqZdSxKX4e1eMTJJjuWwvuHxKP3rwglgXSnSO8hgr0M3JKQyvvriXXGIrTIxs9fzc-g3xMWr9MNhQNOKWsc9iyQC7bUaKlmzcYqIcRJWkjIQQKc2~FHErm0PXjOdZLbeI~f6pOQljdqicj7vxoX-ZMyrMpGtFBKmIhgMV37aHOs--ZNBEYS7Hmo~SI29eF-fpIe7469Dc~6iqX9gR31KJ2xfyi1kBZJcUUWFtIBTAI3NqiLeorhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"}

}
]


const CustomerOrder = () => {

    
    var width = Dimensions.get('window').width; //full width
    var height = Dimensions.get('window').height; //full height


  return (
    <SafeAreaView>
        <ScrollView>
        <View style={{ display: "flex", alignItems: "center", width: width }}>
 
            <View style={style.textContainer}>
                <Text style={style.textHeading}>My Orders</Text>
            </View> 

            
                {
                    arr.map((data)=>{
                        return (
                            <View style={style.bodyContainer}>
               
                            <View style={style.imageContainer}>
                            <Image 
                                source={
                                    data.orderImage
                                }
                                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                resizeMethod="auto"/>
                            </View>
                            <View style={style.textHeading2}>
                                <Text style={style.text2}>Amityville Laundry</Text>
                                <Text style={style.orderText}>Order Id : <Text style={style.orderId}>{data.IdNumber}</Text></Text>
                                <Text style={style.orderText}>Order Items : <Text style={style.orderId}></Text> {data.ItemNumber}</Text>
                                <Text style={style.orderText}>Order Price : <Text style={style.orderId}></Text>{'\u20B9'}{data.Price}</Text>
                                {
                                    data.status=="Success" ? (<Text style={[style.orderText]}>Order Status :<Text style={[style.orderText,{color:"green"}]}>{data.status}</Text></Text>)
                                    :
                                    (<Text style={[style.orderText]}>Order Status :<Text style={[style.orderText,{color:"#FF8A00"}]}>{data.status}</Text></Text>)
                                }
                                
                                 <View style={style.icon}>
                                 <EvilIcons name="star" size={24} color="black" />
                                 <EvilIcons name="star" size={24} color="black" />
                                 <EvilIcons name="star" size={24} color="black" />
                                 <EvilIcons name="star" size={24} color="black" />
                                 <EvilIcons name="star" size={24} color="black" />
                                 </View>
                                 <View style={style.ButtonContainer}>
                                 <Button
                                    title="Write Review"
                                    onPress={() => Alert.alert('Simple Button pressed')}
                                />
                                 </View>
                            </View>
                            
                            <View style={style.SubImageContainer}>
                                <Image 
                                source={
                                   data.StatusImage
                                }
                                style={{ width: '100%', height: '100%', borderRadius: 10 }}
                                resizeMethod="auto"/>
                            </View>
            
                        </View>
                        )
                    })
                }
              
               
            

           
        </View>    
        </ScrollView>

    </SafeAreaView>
  )
}  

const style = StyleSheet.create({
    textContainer:{
        width:100,
        height: 35,
        lineHeight:35.22,
        marginTop:30,
        marginBottom:20
    },
    textHeading:{
        fontWeight:"600",
        fontSize: 20,
        color:"#000000"
    },
    bodyContainer:{
        flexDirection:"row",
      justifyContent : "space-between",
        
        borderColor:"#FAFAFA",
        display:"flex",
        width:"95%",
        marginBottom:10
       
       
    },
    imageContainer:{
        width:127,
        height:169,
        // top:-397,
        // left:-296,
        
    },
    SubImageContainer:{
        width:40,
        height:45,
        // borderWidth:1,
        marginTop:45,
        marginRight:8,
        borderRadius:10

    },
    textHeading2:{
        // width:100,
        // height:3,
        // top:-399,
        // left:-125
        width:"43%",
        paddingLeft:7,
        // borderWidth:1,
        height:"100%"
    },
    text2:{
        fontWeight:"600",
        fontSize:15,
        lineHeight:23,
        // textAlign:"left",
        color:"#1A1A1A",
        // letterSpacing:1
       
    },
    // orderText1:{
    //     width:139,
    //     height: 20,
    //     // toop: -366,
    //     // left: -125
    // },
    orderText:{
        fontWeight:"500",
        fontSize:13,
        lineHeight:18.73,

    },
    orderId:{
        fontWeight:"700",
        fontSize:13,
        lineHeight:15.26
    },
    icon:{
        width:130,
        height: 30,
        // borderWidth:1, 
        flexDirection:'row',
        alignItems:"center",
    },
    ButtonContainer:{
        width:120,
        marginTop:5
    }
    // ItemTextContainer:{
    //     width: 154,
    //     height:17,
    //     // top:-343,
    //     // left:-125
    // },
    // ItemText:{
    //     fontWeight:"700",
    //     fontSize:13,
    //     lineHeight:15.26
    // },
    // ItemTextNumber:{
    //     fontWeight:"600",
    //     fontSize:13,
    //     lineHeight:15.26
    // }

    
   
})

export default CustomerOrder