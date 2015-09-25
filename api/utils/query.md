<a name="module_491222349temp-file"></a>
## 491222349temp-file ⇒ <code>array</code>
save the result of a dom query
	            this is accessible app wide, so you don't have to constantly
	            do dom lookups for each thing every time a function is called
	            also gives you an array, which is more usable than a nodelist

**Returns**: <code>array</code> - [our node list, as an array]  
**Access:** public  
**See**: https://eamann.com/tech/selector-caching-jquery/  

| Param | Type | Description |
| --- | --- | --- |
| [sel] | <code>string</code> &#124; <code>Object</code> | [the string we'll use to get dom nodes, or an existing dom selection] |

