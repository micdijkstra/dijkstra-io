const getRandom = (arr, n) => {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len)
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len)
      result[n] = arr[x in taken ? taken[x] : x]
      taken[x] = --len
  }
  return result
}

const getPageImages = (edges, portraitCount, landscapeCount) => {
  let portraitImages = []
  let landscapeImages = []
  for (let i = 0; i < edges.length; i++) {
    const image = edges[i].node.childImageSharp
    if (!image) continue

    if (image.sizes.aspectRatio >= 1) {
      landscapeImages.push(image)
    } else {
      portraitImages.push(image)
    }
  }

  return {
    portrait: getRandom(portraitImages, 1),
    landscape: getRandom(landscapeImages, 2),
  }
}

export default getPageImages
