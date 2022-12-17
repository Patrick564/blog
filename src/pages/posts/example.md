---
layout: '../../layouts/PostLayout.astro'
title: 'Copiar slices, arrays, maps y structs en Go'
date: '16 diciembre 2022'
---
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci phasellus egestas tellus rutrum tellus.

Tellus cras adipiscing enim eu. At consectetur lorem donec massa sapien faucibus et molestie ac. Vestibulum morbi blandit cursus risus at ultrices.

A arcu cursus vitae congue mauris. Ipsum dolor sit amet consectetur adipiscing elit ut. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Ut lectus arcu bibendum at varius vel. Facilisis leo vel fringilla est ullamcorper eget nulla. Sodales neque sodales ut etiam sit amet nisl purus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id cursus metus.

Non diam phasellus vestibulum lorem sed risus ultricies tristique. Cras sed felis eget velit aliquet sagittis id consectetur. Condimentum id venenatis a condimentum vitae sapien pellentesque. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.

Augue eget arcu dictum varius duis at consectetur lorem donec. Interdum consectetur libero id faucibus nisl. Dolor sit amet consectetur adipiscing elit. Velit scelerisque in dictum non consectetur. Massa tincidunt dui ut ornare lectus sit amet est placerat. Facilisi nullam vehicula ipsum a arcu cursus.

Tempor id eu nisl nunc mi ipsum faucibus vitae. Sapien pellentesque habitant morbi tristique. Commodo elit at imperdiet dui. Risus feugiat in ante metus dictum. Id diam vel quam elementum pulvinar. Felis eget velit aliquet sagittis id consectetur.

- **bold** and _italics._
- lists
- [links](https://astro.build)
- and more!

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello word!")
}
```

A arcu cursus vitae congue mauris. Ipsum dolor sit amet consectetur adipiscing elit ut. Neque vitae tempus quam pellentesque nec nam aliquam sem et. Ut lectus arcu bibendum at varius vel. Facilisis leo vel fringilla est ullamcorper eget nulla. Sodales neque sodales ut etiam sit amet nisl purus. Ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat. Auctor urna nunc id cursus metus.

Non diam phasellus vestibulum lorem sed risus ultricies tristique. Cras sed felis eget velit aliquet sagittis id consectetur. Condimentum id venenatis a condimentum vitae sapien pellentesque. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.

Augue eget arcu dictum varius duis at consectetur lorem donec. Interdum consectetur libero id faucibus nisl. Dolor sit amet consectetur adipiscing elit. Velit scelerisque in dictum non consectetur. Massa tincidunt dui ut ornare lectus sit amet est placerat. Facilisi nullam vehicula ipsum a arcu cursus.

Tempor id eu nisl nunc mi ipsum faucibus vitae. Sapien pellentesque habitant morbi tristique. Commodo elit at imperdiet dui. Risus feugiat in ante metus dictum. Id diam vel quam elementum pulvinar. Felis eget velit aliquet sagittis id consectetur.

```go
package main

import (
    "fmt"
    "strconv"
)

func main() {
    n := 16

    i, err := strconv.Atoi(n)

    fmt.Println(i)
    fmt.Println("Hello word!")
}
```
