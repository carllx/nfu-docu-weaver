参考教程: `| Modulating values with Lerp - Unity Official Tutorials` [youtube](https://www.youtube.com/watch?v=cD-mXwSCvWc?t=162)

![](https://i.imgur.com/TYPAk8J.png)

### Mathf.Lerp
> Mathf.Lerp(`float` From, `float` to, `float` time ) 
```csharp
// LightLerp
using UnityEngine;

public class LightLerp : MonoBehaviour
{
    public float smooth = 2;
    private float newIntensity;
    Light myLight;

    // Start is called before the first frame update
    void Start()
    {
        myLight = GetComponent<Light>();// 注意: light 是该GameObject 的Component
        newIntensity = myLight.intensity;
    }


    void Update()
    {
        IntensityChanging();
    }

    void IntensityChanging()
    {
        float intensityA = 0.5f;
        float intensityB = 5f;

        if (Input.GetKeyDown(KeyCode.A))
            newIntensity = intensityA;
        if (Input.GetKeyDown(KeyCode.D))
            newIntensity = intensityB;

        myLight.intensity = Mathf.Lerp(myLight.intensity, newIntensity, Time.deltaTime * smooth);
    }
}
```


### Vector3.Lerp  (x,y,z)
```Csharp
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Vector3DLerp : MonoBehaviour
{
    public float smooth = 2;
    private Vector3 newPosition;
    private Transform myTransform;

    // Start is called before the first frame update
    void Start()
    {
        //newPosition = transform.position;
        myTransform = GetComponent<Transform>();
        newPosition = myTransform.position;
    }

    // Update is called once per frame
    void Update()
    {
        PositionChanging();
    }
    void PositionChanging()
    {
        Vector3 positionA = new Vector3(-5, 3, 0);
        Vector3 positionB = new Vector3(5, 3, 0);

        if (Input.GetKeyDown(KeyCode.Q))
            newPosition = positionA;
        if (Input.GetKeyDown(KeyCode.E))
            newPosition = positionB;

        //transform.position = Vector3.Lerp(transform.position, newPosition, Time.deltaTime * smooth);
        myTransform.position = Vector3.Lerp(myTransform.position, newPosition, Time.deltaTime * smooth);
    }
}

```



### Color.Lerp
```Csharp
using UnityEngine;
using System.Collections;

public class ColorLerp : MonoBehaviour
{
    public float smooth = 2;
    private Color newColour;
    Light mylight;

    void Start()
    {
        mylight = GetComponent<Light>();
        newColour = mylight.color;
    }
    void Update()
    {
        ColourChanging();
    }

    void ColourChanging()
    {
        Color colourA = Color.red;
        Color colourB = Color.green;

        if (Input.GetKeyDown(KeyCode.Z))
            newColour = colourA;
        if (Input.GetKeyDown(KeyCode.C))
            newColour = colourB;

        mylight.color = Color.Lerp(mylight.color, newColour, Time.deltaTime * smooth);
    }
}
```


COlolr
```
 if ( ColorUtility.TryParseHtmlString("#09FF0064", out color))
         { matchPanel.GetComponent<Image>().color = color; }

image.color = new Color(r,g,b) ;
```