import {Spinner} from 'native-base';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, FlatList, View, Text, RefreshControl} from 'react-native';
import { QueryContext } from '../../../../contexts/QueryContext'
import { colors } from '../../../../Utilities/colors'
import { useGet } from '../../../../hooks/useGet'
import { WholeSalerCard } from '../components/WholesalerCard'

export const WholeSalers = () => {
    const {query} = useContext(QueryContext);
    const [data, refetch] = useGet('/sellers/getAll?type=Retailer', {
      paginate: true,
      manual: true,
    });
  
    const [endReached, setEndReached] = useState(false);
    const [items, setItems] = useState([]);
  
    useEffect(() => {
      if (data.data) {
        if (!data.success && !data.loading) {
          setEndReached(true);
        } else {
          setItems((i) => [...i, ...data.data]);
        }
      }
    }, [data]);
  
    useEffect(() => {
      refetch(0);
    }, [refetch]);
  
    const refresh = () => {
      refetch(0);
      setItems([]);
    };
  
    let filteredItems = React.useMemo(() => {
      if (query.name === '') {
        return items;
      } else {
        return items.filter((item) => item.seller.name.includes(query.name));
      }
    }, [query, items]);
  
    if (items.length === 0 && data.loading) {
      return <Spinner color={colors.blue} />;
    }
  
    if (filteredItems.length === 0 && !data.loading) {
      return (
        <View>
         <WholeSalerCard></WholeSalerCard>
        </View>
      );
    }
  
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            onRefresh={refresh}
            refreshing={false}
            colors={[colors.blue]}
          />
        }
        keyExtractor={(_, i) => `retailer-${i}`}
        data={filteredItems}
        ListFooterComponent={() =>
          data.loading && items.length !== 0 ? (
            <Spinner color={colors.blue} />
          ) : null
        }
        onEndReached={() => {
          if (!endReached && filteredItems.length > 3) {
            refetch(items.length);
          }
        }}
        onEndReachedThreshold={0.01}
        renderItem={({item, index}) => {
          return <WholeSalerCard item={item} key={index} />;
        }}
        style={styles.marginTop}
      />
    );
  };
  
  const styles = StyleSheet.create({
      marginTop: {marginTop: 15},
  
  
        Container: {flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
      },
  
      CardBox:{
       
      }
  
        
  });
  