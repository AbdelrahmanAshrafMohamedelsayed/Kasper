# CSS TIPS Template due

## 1. responsive design

```css
.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
/* Small */
@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}
/* Medium */
@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}
/* Large */
@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
```

## 2. grid system for 3 columns the min-width is 300px

```css
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  /* this equal to  */
  /* flex: 1 1 300px; */
  /* flexwrap:wrap */
  grid-gap: 20px;
  margin-top: 100px;
`;
```

### 3. centering a div

```css
position: absolute;
top: 50%; // for vertical centering
left: 50%;
/* right 50% */ // for horizontal centering
transform: translate(-50%, -50%);
```

### 4. background image

```css
export const Landing1 = styled.div`
  position: relative;
  background-image: ${(props) => `url(${props.imgUrl})`};
  background-size: cover;
  height: calc(100vh - 77.2px);
  `;
```

### 5. for icon next to text

```css
export const Containermain = styled.div`
  display: flex;
  flex-wrap: wrap;
  `;
export const Text = styled.div`
  flex: 1;
`;
  .icon {
    flex-basis: 60px;
    font-size: 35px;
    color: #10cab7;
  }
```

### 6. IMAGES --> 100% width and height auto

```css
export const Image = styled.img`
  width: 100%;
  /* height: auto; */
`;
```

## 7. hr line

```css
.about .about-content .text hr {
  width: 50%;
  display: inline-block;
  border-color: var(--main-color);
}
```

### 8. Center an image

```css
export const Image = styled.div`
  /* display: block; */
  margin-left: auto;
  margin-right: auto;
  /* width: 50%; */
  /* div around the image */
`;

```

### 9. grid area

```css
.page {
  height: 100vh;
  background-color: #eee;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 50px auto 50px;
  grid-template-areas:
    "logo logo nav nav nav nav nav nav nav nav"
    "cont cont cont cont cont cont cont . side side"
    "foot foot foot foot foot foot foot foot foot foot";
}
h2 {
  grid-area: logo;
  background-color: red;
  color: white;
}
nav {
  grid-area: nav;
  background-color: blue;
  color: white;
}
section {
  grid-area: cont;
  background-color: yellow;
  color: white;
}
aside {
  grid-area: side;
  background-color: green;
  color: white;
}
footer {
  grid-area: foot;
  background-color: black;
  color: white;
}
```

### 10. images

```css
max-width: 100%;
/* for center image make the parent text align center */
```

### 11. increase the width and height of the div in effectting way

```css
export const LastCont = styled.div`
  padding: 100px 0;`;
```
