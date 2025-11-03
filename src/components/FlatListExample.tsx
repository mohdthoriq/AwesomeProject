import React, { useState, useRef } from 'react';
import { FlatList, Text, View, StyleSheet, Alert, RefreshControl, ViewToken, ListRenderItemInfo } from 'react-native';

type Item = { id: string; title: string };

const DATA: Item[] = Array.from({ length: 100 }, (_, i) => ({ id: i.toString(), title: `Item ${i}` }));

const FlatListExample = () => {
  const [refreshing, setRefreshing] = useState(false);
  const viewabilityConfig = { itemVisiblePercentThreshold: 50 };

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const getItemLayout = (data: ArrayLike<Item> | null | undefined, index: number) => ({ length: 50, offset: 50 * index, index });

  return (
    <FlatList
      data={DATA}
      keyExtractor={(item: Item) => item.id}
      renderItem={({ item }: ListRenderItemInfo<Item>) => (
        <View style={styles.item}>
          <Text>{item.title}</Text>
        </View>
      )}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      getItemLayout={getItemLayout}
      initialNumToRender={10}
      viewabilityConfig={viewabilityConfig}
      ListHeaderComponent={<Text style={styles.header}>Daftar Item</Text>}
      ListFooterComponent={<Text style={styles.footer}>Akhir Daftar</Text>}
    />
  );
};

const styles = StyleSheet.create({
  item: { padding: 16, borderBottomWidth: 1, borderColor: '#ddd' },
  header: { padding: 16, fontWeight: 'bold' },
  footer: { padding: 16, textAlign: 'center', color: 'gray' },
});

export default FlatListExample;