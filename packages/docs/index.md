
```javascript
const documentVisibility = useDocumentVisibility();
```

### 2. 单输入

单参数无论是否必填直接输入。

```javascript
const size = useSize(dom);
```
### 3. 多必选参数

必选参数小于 2 个，应平级输入。

```javascript
const ref = useKeyPress(keyFilter, eventHandler)
```

如果多于 2 个，应以 object 形式输入。

### 4. 多非必选参数

多非必选参数以 object 形式输入。

```javascript
const result = useDrop({onText?, onFiles?, onURI?, onDOM?});

const result = useRequest(service, {
  manual?,
  initialData?,
  onSuccess?,
});
```

### 5. 必选参数 + 非必选参数

必选参数在前，非必选参数在后。

```javascript
const result = useTextSelection(items, defaultSelected?);
```

