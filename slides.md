---
theme: neversink
title: The Debug Table Binary Exercises
info: Binary challenges for The Debug Table's second gathering.
# apply UnoCSS classes to the current slide
class: text-left
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: slide-left
# enable Comark Syntax: https://comark.dev/syntax/markdown
comark: true
# duration of the presentation
duration: 150min
colorSchema: dark
layout: intro
author: Maria D. Campbell
---

# The Debug Table Binary Exercises

By Maria D. Campbell • mariadcampbell.com

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Meetup event schedule

:: left ::

<div class="flex items-center justify-between mt-48">
  <div class="text-center">
    <div>Arrive & intros</div>
    <div class="text-amber-400 text-sm">(~30 min)</div>
  </div>
  <carbon-arrow-right class="text-amber-400 text-3xl" />
  <div class="text-center">
    <div>Binary challenges</div>
    <div class="text-amber-400 text-sm">(~35 min)</div>
  </div>
</div>

:: right ::

<div class="flex items-center justify-between mt-48">
  <carbon-arrow-right class="text-amber-400 text-3xl" />
    <div class="text-center">
      <div>Your projects</div>
      <div class="text-amber-400 text-sm">(~75 min)</div>
    </div>
  <carbon-arrow-right class="text-amber-400 text-3xl" />
  <div class="text-center">
    <div>Wrap-up</div>
    <div class="text-amber-400 text-sm">(~10 min)</div>
  </div>
</div>

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Tools required for the challenges

:: left ::

<div class="mt-23 [&_table]:w-[53.5rem]">

| Tool | Use it for | Account needed? |
| --- | --- | --- |
| Slidev (this deck) | Point of reference | No |
| Google Colab | For running the binary challenges in Python | A Google account is required |
| CodeFile | For displaying answers | No |

</div>

---
layout: top-title-two-cols
columns: is-6-6
align: c-cm-cm
---

:: title ::

# Where to find them

:: left ::

<div class="mt-40">
<div class="text-center">
  <div class="text-3xl">Google Colab</div>
  <a class="text-amber-400" href="https://colab.research.google.com">colab.research.google.com</a>
</div>
</div>

:: right ::

<div class="text-center mt-40">
  <div class="text-3xl">CodeFile</div>
  <a class="text-amber-400" href="https://codefile.io">codefile.io</a>
</div>

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Challenge 1: Counting in binary (Set 1)

:: left ::

<v-drag pos="217,101,180,177,-14">
<StickyNote color="amber-light" textAlign="left" width="180px" title="Set 1 Challenge 1" customTitle="block text-base text-white" custom="mt-3">
Write 5, 9, and 13 in binary, 4 digits each
</StickyNote>
</v-drag>

<v-drag pos="377,141,180,180">
<StickyNote color="teal-light" textAlign="left" width="180px" title="Set 1 Challenge 2" customTitle="block text-base text-white" custom="mt-3">
Convert 1011, 0110, and 1111 to decimal
</StickyNote>
</v-drag>

:: right ::

<v-drag pos="536,220,180,180,13">
<StickyNote color="pink-light" textAlign="left" width="180px" title="Set 1 Challenge 3" customTitle="block text-base text-white" custom="mt-3">
How many values can 4 binary digits represent, and what's the highest?
</StickyNote>
</v-drag>
  
<v-drag pos="336,414,235,61">
  <div class="text-amber-400">Hint line:</div> 8 4 2 1 is the place-value grid
</v-drag>

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Challenge 2: Flip the last bit (Set 2)

:: left ::

<v-drag pos="67,113,180,177,-20">
<StickyNote color="amber-light" textAlign="left" width="180px" title="Set 2 Challenge 1" customTitle="block text-base text-white" custom="mt-3">
  Write 200 as 8 binary digits
</StickyNote>
</v-drag> 

<v-drag pos="246,123,183,180,22">
<StickyNote color="teal-light" textAlign="left" width="180px" title="Set 2 Challenge 2" customTitle="block text-base text-white" custom="mt-3">
Replace the last digit with 1. What's the new value?
</StickyNote>
</v-drag> 

<v-drag pos="153,271,180,190">
<StickyNote color="pink-light" textAlign="left" width="180px" title="Set 2 Challenge 3" customTitle="block text-base text-white" custom="mt-3">
How much did it change?
</StickyNote>
</v-drag>

:: right::

<v-drag pos="487,127,386,114">
<div class="text-amber-400">
How it works:
</div>
A pixel's red value is 200. To hide a bit, keep every binary digit except the last, and replace the last with the hidden bit.
</v-drag>

<v-drag pos="405,338,386,94">
  <div class="text-amber-400">Hint line:</div> 128 64 32 16 8 4 2 1 is the place-value grid
</v-drag>

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Challenge 2: Flip the last bit (Set 2, continued)

:: left ::

<v-drag pos="67,113,180,177,-20">
<StickyNote color="amber-light" textAlign="left" width="180px" title="Set 2 Challenge 4" customTitle="block text-base text-white" custom="mt-3">
What's the new value?
</StickyNote>
</v-drag>

<v-drag pos="231,142,180,177,18">
<StickyNote color="teal-light" textAlign="left" width="180px" title="Set 2 Challenge 5" customTitle="block text-base text-white" custom="mt-3">
Why does replacing more digits risk a visible change?
</StickyNote>
</v-drag>

:: right ::

<v-drag pos="462,112,381,153">
<div class="text-amber-400">
How it works:
</div>
Same pixel, same red value: 200. This time, hide 3 bits at once: keep every binary digit except the last 3, and replace those last 3 with the hidden bits <code>101</code>.
</v-drag>

<v-drag pos="398,349,381,88">
<div class="text-amber-400">
Hint line:
</div>
128 64 32 16 8 4 2 1 is the place-value grid
</v-drag>

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Challenge 3: Max message length (Set 3)

:: left ::

<v-drag pos="116,117,180,177,-20">
<StickyNote color="amber-light" textAlign="left" width="180px" title="Set 3 Challenge 1" customTitle="block text-base text-white" custom="mt-3">
How many bits are in 4 bytes?
</StickyNote>
</v-drag>

<v-drag pos="273,152,180,177,18">
<StickyNote color="teal-light" textAlign="left" width="180px" title="Set 3 Challenge 2" customTitle="block text-base text-white" custom="mt-3">
What's the largest length those bits can describe? A power of 2 is enough.
</StickyNote>
</v-drag>

:: right ::

<v-drag pos="505,120,381,117">
<div class="text-amber-400">
How it works:
</div>
Before hiding a message, the app stores the message's length at the start, in 4 bytes, so the app knows how much to read back.
</v-drag>

<v-drag pos="443,356,381,88">
<div class="text-amber-400">
Hint line:
</div>
1 byte = 8 bits
</v-drag>

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Challenge 4: The é mystery (Bonus)

:: left ::

<v-drag pos="332,72,291,104">

```python
data = "é".encode()
print(data)
print("".join(chr(b) for b in data))
print(data.decode())
```

</v-drag>

<v-drag pos="60,102,188,188,-16">
<StickyNote color="amber-light" textAlign="left" width="180px" title="Bonus Challenge 1" customTitle="block text-base text-white" custom="mt-3">
How many bytes does "é".encode() give you?
</StickyNote>
</v-drag>

<v-drag pos="242,184,188,188,14">
<StickyNote color="teal-light" textAlign="left" width="180px" title="Bonus Challenge 2" customTitle="block text-base text-white" custom="mt-3">
Turning each byte into a character with chr() gives Ã©, not é. Why?
</StickyNote>
</v-drag>

<v-drag pos="122,299,188,188">
<StickyNote color="pink-light" textAlign="left" width="180px" title="Bonus Challenge 3" customTitle="block text-base text-white" custom="mt-3">
What does .decode() do differently?
</StickyNote>
</v-drag>

<v-drag pos="471,200,381,118">
<div class="text-amber-400">
How it works:
</div>
Computers store text as bytes. Plain English letters take 1 byte each, but a character like é takes more than one.
</v-drag>

<v-drag pos="431,367,381,88">
<div class="text-amber-400">
Hint line:
</div>
This is the same bug as a page missing <code>&lt;meta charset="UTF-8"&gt;</code>
</v-drag>

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Related resource

:: right ::

<v-drag pos="197,98,561,106">
<div class="text-amber-400 text-3xl text-center">
<a class="text-amber-400" href="https://thepythoncode.com/article/hide-secret-data-in-images-using-steganography-python">How to Hide Data in Images in Python</a>
</div>
<div class="text-gray-400 text-2xl mt-4 text-center">
(The Python Code)
</div>
</v-drag>

<v-drag pos="239,217,475,104">
<div class="text-center text-gray-400 text-lg">
The challenges come from my image steganography app, which started from this tutorial.
</div>
</v-drag>

<v-drag pos="396,309,188,215">
  <img src="/qr-tutorial.svg" class="w-40" />
</v-drag>

---
layout: top-title-two-cols
columns: is-6-6
align: c-lm-lm
---

:: title ::

# Find me

:: left ::

<v-drag pos="110,155,360,40"> 
<div class="text-amber-400 text-center mb-3">mariadcampbell.com</div>
</v-drag>

<v-drag pos="170,200,240,240">
  <img src="/qr-mdc-site.svg" class="w-full" />
</v-drag>

:: right ::

<v-drag pos="510,155,360,40">
<div class="text-amber-400 text-center mb-3">linkedin.com/in/mariacampbell/</div>
</v-drag>

<v-drag pos="570,200,240,240">
  <img src="/qr-linkedin.svg" class="w-full" />
</v-drag>
