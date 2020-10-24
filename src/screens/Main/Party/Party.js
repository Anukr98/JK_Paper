import React, {useState , useEffect , useContext } from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import { initialQueryState , QueryContext } from '../../../contexts/QueryContext'
import { UserContext } from '../../../contexts/UserContext'
import { PartyContext } from '../../../contexts/PartyContext'
import { colors } from '../../../Utilities/colors'
import { AddRetailerFAB } from './AddRetailerFAB'
import { Header } from './Header'
import { TopNavigator } from './TopNavigator/index'

export const Party = () => {
    const [data , setData] = useState({})
    const [modal, setModal] = useState(false);
    const [filters, setFilters] = useState(initialQueryState);
    const [query, setQuery] = useState('');

    const openModal = () => setModal(true);
    const closeModal = () => setModal(false);

    const setAreaAndClose = (area) => {
        setFilters((p) => ({...p, area}));
        closeModal();
    };

    const { authPayload , setAuthPayload } = useContext(UserContext)
    
    const setParty = (data) => {
        setData(data)
    }

    useEffect( () => {
        const token = (authPayload.token)
        const sfid = (authPayload.sfid)
        //console.log(sfid)
        
        var myHeaders = new Headers();
        myHeaders.append("token", token);
        //myHeaders.append("Cookie", "connect.sid=s%3A-0mVNt75hxTSDzWum4b4Azn1fgqEyy8z.5x%2FfXXpv%2BpiI6atO1fQwir5Sj7fMF%2F1NgKHYB40T8Qk");
    
        var requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };
    
        const getUserData = async () => {
          await fetch(`https://jkpaper-sandbox.herokuapp.com/party/getParties?team__c=${sfid}`, requestOptions)
          .then(response => response.json())
          .then(async result => {
                //console.log(result)
                setParty(result)
            })
            .catch(error => console.log('error', error));
        }
    
        getUserData() 
    } , [])

    return(
        <PartyContext.Provider value = {{ data , setData : setParty}}>
            <QueryContext.Provider value = {{ query : filters , setQuery : setFilters}}>
                <Header openModal = {openModal} filters = {filters} setFilters = {setFilters} />
                <TopNavigator />
                <AddRetailerFAB />
            </QueryContext.Provider>
        </PartyContext.Provider>
    )
}

const styles = StyleSheet.create({
    modal: {
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      height: 280,
      width: '94%',
      backgroundColor: 'white',
      borderRadius: 12,
    },
    close: {position: 'absolute', top: 5, right: 5},
    search: {
      width: '90%',
      elevation: 0,
      borderColor: 'grey',
      borderWidth: 1,
      marginBottom: 24,
      marginTop: 10,
    },
    text1: {
      paddingHorizontal: '10%',
      width: '90%',
      color: colors.blue,
      fontSize: 16,
      marginVertical: 4,
      alignSelf: 'flex-start',
    },
  });
  