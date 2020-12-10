import React from 'react'

import { Title, View } from '../Header/style'
import SafeAreaView from 'react-native-safe-area-view'

export default class Header extends React.Component {
    render(){
        return (
            <SafeAreaView>
                <View >
                    <Title>{this.props.title}</Title>
                </View>
            </SafeAreaView>
        )
    }
}