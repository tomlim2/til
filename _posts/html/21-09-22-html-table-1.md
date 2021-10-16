---
layout: post-base
title: HTML/ table
meta: Table example
source: https://content.codecademy.com/courses/learn-html-tables/index.html
category: htmlAndCss
---
아래는 table 예시이다. 헷갈릴때 복기하자.

```html
<table>
    <thead>
        <tr>
            <th colspan="2">
            <h1>Wine Festival Schedule</h1>
            </th>
        </tr>
        <tr>
            <th><h2>Time</h2></th>
            <th><h2>Event</h2></th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="left"><h3>12:00PM</h3></td>
            <td><h3>Welcome Reception</h3></td>
        </tr>
        <tr>
            <td class="left"><h3>01:00PM</h3></td>
            <td><h3>Storytelling & Tasting</h3></td>
        </tr>
        <tr>
            <td class="left"><h3>02:00PM</h3></td>
            <td><h3>Wine Luncheon</h3></td>
        </tr>
        <tr>
            <td class="left"><h3>03:00PM</h3></td>
            <td><h3>Aguillar Family Wines</h3></td>
        </tr>
        <tr>
            <td class="left"><h3>04:00PM</h3></td>
            <td><h3>Wine & Cheese Tasting</h3></td>
        </tr>
</tbody>
    
</table>
```