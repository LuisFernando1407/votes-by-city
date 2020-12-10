import React, { useState } from 'react'
import { Dimensions, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'

import { 
    ViewButtonContainer, 
    ViewButton, 
    ViewVoteCounting, 
    ViewVoteContainer, 
    VoteText,
    HeaderVote,
    ScrollView
} from '../Home/style'

import Button from '../../components/Button'

const Home = ( { navigation } ) => {
    const { width } = Dimensions.get('window')
    const widhtWithMaring = width - 40

    const [votesFortaleza, setVotesFortaleza] = useState(0)
    const [votesQuixada, setVotesQuixada] = useState(0)
    const [votesLimoeiro, setVotesLiomeiro] = useState(0)
    const [votesJuazeiro, setVotesJuazeiro] = useState(0)

    const buttons = [
        {
            title: "Quixadá", 
            handle: () => {
                setVotesQuixada(votesQuixada + 1)
            },
            votes: votesQuixada
        },
        {
            title: "Fortaleza", 
            handle: () => {
                setVotesFortaleza(votesFortaleza + 1)
            },
            votes: votesFortaleza
        },
        {
            title: "Liomeiro", 
            handle: () => {
                setVotesLiomeiro(votesLimoeiro + 1)
            },
            votes: votesLimoeiro
        },
        {
            title: "Juazeiro", 
            handle: () => {
                setVotesJuazeiro(votesJuazeiro + 1)
            },
            votes: votesJuazeiro
        }
    ]

    const votesRanking = () => {
        const buttonsSort = Object.assign([], buttons)
        buttonsSort.sort((a,b) => a.votes < b.votes)
        
        return buttonsSort
    }

    const maxItem = () => Math.max.apply(Math, buttons.map((item) => { return item.votes }))

    return (
        <SafeAreaView style={{ flex: 1}}>
            <ScrollView contentContainerStyle={{ flex: 1, flexDirection: 'column', justifyContent: 'space-between' }}>

                <HeaderVote width={widhtWithMaring}>Vote counting</HeaderVote>
                    
                <ViewVoteContainer width={widhtWithMaring}>
                    <ViewVoteCounting>
                        { buttons.map( (button, index) =>
                            <VoteText key={index}>{button.title}: {button.votes > 0 ? button.votes : ''} {button.votes > 1 ? 'votes' : button.votes == 1 ? 'vote' : 'No votes cast'}</VoteText>
                        )}
                    </ViewVoteCounting>
                </ViewVoteContainer>


                <HeaderVote width={widhtWithMaring}>Votes ranking</HeaderVote>
                
                <ViewVoteContainer width={widhtWithMaring}>
                    <ViewVoteCounting>
                        { maxItem() > 0 ? 
                            <>
                                    { votesRanking().map( (item, index) => 
                                        <VoteText key={index}>{index + 1}: {item.title}</VoteText>
                                    )}
                                </>
                            : <VoteText>Vote counting not started</VoteText>}
                        
                    </ViewVoteCounting>
                </ViewVoteContainer>
        
                <ViewButtonContainer width={widhtWithMaring}>
                    <ViewButton>
                        { buttons.map( (button, index) =>
                            <Button key={index} handle={button.handle} title={button.title}/>
                        )}
                    </ViewButton>
                </ViewButtonContainer>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home