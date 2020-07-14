import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

function DetailRecette() {
    const id_recette = '73e121b1-5d1b-47fe-a7d7-2a94e7d3c417';
    const [recettes, setRecettes] = useState({});

    function fetchRecettes() {
        fetch('http://192.168.1.12:3000/recettes/' + '194f619c-1a6e-4558-869e-d61f5bb83598')
            .then(response => response.json())
            .then(data => setRecettes(data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchRecettes();
    }, []);

    return (
        <View style={styles.detailRecette}>
            <View>
                <Text style={styles.texte}>Recette: </Text>
            </View>
            <View>
                <Text style={styles.texteEtape}>{recettes && recettes.etape_recette}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailRecette: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 15,
        marginBottom: 120,
        height: 'auto',
        marginHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: '#070707',
    },
    texte: {
        color: '#FCBC2C',
        fontSize: 18,
        marginLeft: 15,
        width: '100%',

    },
    texteEtape: {
        color: '#AFAFAF',
        marginHorizontal: 15,
        paddingVertical: 10,
    },
});

export default DetailRecette;