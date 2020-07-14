import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

function NonRecette() {
    const id_recetteCarbonnara = '73e121b1-5d1b-47fe-a7d7-2a94e7d3c417';
    const id_recetteNouilles = '15136396-6479-49d1-86a4-8eaf989580f2';
    const [recettes, setRecettes] = useState({});

    function fetchNomRecette() {
        fetch('http://192.168.1.12:3000/recettes/nom_recette/' + id_recetteCarbonnara)
            .then(response => response.json())
            .then(data => setRecettes(data))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        fetchNomRecette();
    }, []);

    return (
        <Text style={styles.titre}>{recettes && recettes.nom_recette}</Text>

    );
}
const styles = StyleSheet.create({
    titre: {
        color: '#FCBC2C',
        fontSize: 22,
    },
});

export default NonRecette;