# Comparacion-Imagenes
Comparacion de imagenes con aws rekognition utilizando aws lambda
### Como usar
Realizar peticion POST a https://9wo0dbkl2i.execute-api.us-east-2.amazonaws.com/tarea4-semi1/tarea4-semi1 con el archivo entrada.json
### Entrada
Ejemplo de estructura del archivo de entrada
```
{
  "imagen1": imagenbase64,
  "imagen2": imagenbase64,
  "extension": extension,
  "similitud": 70
}
```
### Salida
Ejemplo de salida
```
{
    "SourceImageFace": {
        "BoundingBox": {
            "Width": 0.2799290120601654,
            "Height": 0.639157772064209,
            "Left": 0.34623655676841736,
            "Top": 0.09059320390224457
        },
        "Confidence": 99.99909210205078
    },
    "FaceMatches": [
        {
            "Similarity": 99.91283416748047,
            "Face": {
                "BoundingBox": {
                    "Width": 0.33113282918930054,
                    "Height": 0.3448399603366852,
                    "Left": 0.2831326723098755,
                    "Top": 0.17237801849842072
                },
                "Confidence": 99.99897766113281,
                "Landmarks": [
                    {
                        "Type": "eyeLeft",
                        "X": 0.33877426385879517,
                        "Y": 0.32349592447280884
                    },
                    {
                        "Type": "eyeRight",
                        "X": 0.45233041048049927,
                        "Y": 0.3155529201030731
                    },
                    {
                        "Type": "mouthLeft",
                        "X": 0.38573041558265686,
                        "Y": 0.45064839720726013
                    },
                    {
                        "Type": "mouthRight",
                        "X": 0.48071232438087463,
                        "Y": 0.4450381100177765
                    },
                    {
                        "Type": "nose",
                        "X": 0.3673926889896393,
                        "Y": 0.40901249647140503
                    }
                ],
                "Pose": {
                    "Roll": -8.368993759155273,
                    "Yaw": -37.17115020751953,
                    "Pitch": -13.279886245727539
                },
                "Quality": {
                    "Brightness": 65.7884750366211,
                    "Sharpness": 89.85481262207031
                }
            }
        }
    ],
    "UnmatchedFaces": []
}
}
```
## Enunciado
![alt text](https://github.com/SelvinLP/Comparacion-Imagenes/blob/main/Tarea4.jpg)
## Api Gateway
![alt text](https://github.com/SelvinLP/Comparacion-Imagenes/blob/main/api.png)
