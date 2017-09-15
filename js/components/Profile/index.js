import React from 'react';
import {Image } from 'react-native';
import {Body, Button, Container, Content, Header,H1 ,Icon, Left,Text,Spinner, Title, View} from 'native-base';
import Db from '../../Db';
import Styles from './Styles';
const {ImagePicker} = Expo;
var auth;
var storage;

class Profile extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userName:'',
            photoURL: ""
        }
        auth=Db.getAuth();
        storage=Db.getStorage().ref();
    }

    componentDidMount(){
        if(auth.currentUser.photoURL!=null){
            this.setState({userName: auth.currentUser.displayName, photoURL: auth.currentUser.photoURL });
        } else {
            this.setState({userName: auth.currentUser.displayName, photoURL: "https://firebasestorage.googleapis.com/v0/b/sportsbuzz-19fd4.appspot.com/o/images%2FnoImg.jpg?alt=media&token=088f3f11-4f39-42da-94cf-7db7ed8dca19"})
        }
    }

    updateImage(){
        ImagePicker.launchImageLibraryAsync({base64: true}).then((image)=>{
            this.setState({photoURL: image.uri});
            let storageref = storage.child('images/'+auth.currentUser.uid+".jpeg");
            storageref.putString(image.base64, 'base64').then((snapshot)=>{
                console.log('file uploaded');
                storageref.getDownloadURL().then((url)=>{
                    auth.currentUser.updateProfile({photoURL: url});
                })
            })
        });
    }

    render(){
        return <Container style={Styles.mainContainer}>
            <Header style={Styles.head}>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name="arrow-back" />
                </Button>
              </Left>
              <Body>
                <Title>Profile</Title>
              </Body>
            </Header>
            <Content padder>
              <View style={Styles.logo}>
                <H1> SportsBuzz</H1>
              </View>
              <View>
                {this.state.photoURL === "" ? <View style={Styles.img}>
                    <Spinner color="blue" />
                    <Text> Loading Image</Text>
                  </View> : <Image source={{ uri: this.state.photoURL }} style={Styles.img}>
                    <Button dark style={Styles.but} onPress={() => this.updateImage()}>
                      <Icon name="attach" />
                    </Button>
                  </Image>}
              </View>
              <View>
                <View style={Styles.usrName}>
                  <Text style={Styles.usrNameTx}>
                    {this.state.userName}
                  </Text>
                </View>
              </View>
              <View style={Styles.usrName} >
                  <Button onPress={()=>{auth.sendPasswordResetEmail(auth.currentUser.email); alert('a password reset mail is sent to your email address') }}><Text>Reset Password</Text></Button>
              </View>
            </Content>
        </Container>;
    }

}

export default Profile