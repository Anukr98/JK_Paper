import React , { useContext , useState , useEffect } from 'react';
import { Tab , Tabs , ScrollableTab } from 'native-base'
import { colors } from '../../../../Utilities/colors'
import { UserContext } from '../../../../contexts/UserContext'

//import components
import { Retailers } from './Retailers'
import { Customers } from './Customers'
import { WholeSalers } from './Wholesalers'
import { SubDealer } from './SubDealer'
import { RetailDistributor } from './RetailDistributor'
import { Dealers } from './Dealers'

export const TopNavigator = () => {
    const { authPayload } = useContext(UserContext)
    const [keys, setKeys] = useState([])
    
    useEffect( () => {

        const token = authPayload.token
        const sfid = authPayload.sfid

        var myHeaders = new Headers();
        myHeaders.append("token", token);

        var requestOptions = {
            method : 'GET',
            headers : myHeaders,
            redirect: 'follow'
        }

        const getUserData = async () => {
            await fetch(`https://jkpaper-sandbox.herokuapp.com/party/getParties?team__c=${sfid}`, requestOptions)
            .then(response => response.json())
            .then(async result => {
                console.log(result.parties.Wholesaler)
                setKeys(Object.keys(result.parties))
            })
            .catch(error => console.log('Error' , error))
        }

        getUserData()
    } , [])

    return(
        <Tabs 
            renderTabBar={ () => 
                <ScrollableTab 
                    tabsContainerStyle = {{backgroundColor : '#fff'}}  
                    underlineStyle = {{ backgroundColor : colors.blue}}
                />
            }
        >
            {
        keys.map(item =>
          <Tab heading={item} tabStyle = {{backgroundColor : '#fff'}} textStyle = {{color : colors.black}} activeTabStyle = {{backgroundColor : '#fff'}} activeTextStyle = {{color : colors.black}} >
            {
              item == 'Retailer' ? <Retailers /> : 
              item == 'Customer' ? <Customers /> : 
              item == 'Wholesaler' ? <WholeSalers /> : 
              item == 'Sub-Dealer' ? <SubDealer /> : 
              item == 'Retail Distributor' ? <RetailDistributor /> : <Dealers />
            }
          </Tab>
        )
      }
        </Tabs>
    )
}