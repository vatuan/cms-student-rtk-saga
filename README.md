#setup redux, typescript

> yarn create react-app my-app --template redux-typescript

#add react-router-dom

> yarn add react-router-dom @type/react-router-dom

#setup eslint, prettier

# Những khái niệm cần biết trong Redux Saga

### Effect

- **Effect** là 1 JS Object, chứa thông tin để saga middleware biết phải làm gì

### Task

- là 1 process chạy dưới background, trong saga có thể tạo nhiều **task** khác nhau chạy đồng thời song song với nhau

```php
import {fork} from 'redux-saga/effects'
function* saga(){
    const task = yield fork(otherSaga, ...args)
}
```

### Blocking and Non-blocking call

- Blocking : có nghĩa là _đợi lệnh 1 xong mới chạy lệnh 2_
- Non-blocking : trigger lệnh 1 chạy xong,chạy qua lệnh 2 luôn, _không cần đợi_ lệnh 1 chạy xong

### Watcher/Worker

- là 1 mô hình theo dõi 1 thằng làm việc gì đấy
- Example

```php
function* worker(payload){
    // ... do some stuff
}
function* watcher(){
    while(true){
        const action = yield take(ACTION)   // take là 1 blocking call
        yield fork(worker, action.payload)
    }
}
```

> **_Note :_**

- Trong Vd trên trong vòng lặp while ,đầu tiên nhảy vào thằng **take**, thằng **take** này là _blocking call_ nên nó sẽ đứng đợi cho đến khi bạn dispatch 1 action nào đó lên, nếu _ĐÚNG action_ mà nó mong muốn nó sẽ _tạo ra 1 worker_ và **truyền payload** vào (**_fork_**)
- Mà thằng **fork** nó là **Non-blocking call** nên nó sẽ tiếp tục chạy tiếp, chạy tiếp nó sẽ vào vòng lặp while(true), gặp **take** lại đứng đợi
- Cứ như thế tạo thành vòng tròn: đứng đợi(_take_) -> thực hiện (_fork_) -> đứng đợi(_take_)

**_Bảng Blocking/None-blocking_** : https://redux-saga.js.org/docs/api#blocking--non-blocking

# Những Effect creator hay sử dụng trong Redux Saga

### Phân biệt effect và effecr creator

- Effect : đơn giản là 1 js object có chứa thông tin để saga middleware biết cần phải làm gì
- Effect Creator: _là 1 function trả về 1 Effect_ và nó không thực thi cái Effect này, người thực thi nó là **saga middleware**
  ==> dùng Effect Creator tạo cho mình 1 Effect (tức là 1 js object), khi có object(Effect) này thì **saga middleware** đọc vào
  cần biết phải làm gì
  ==> **_Effect Creator_**: trả về **Effect** chứa thông tin giúp **middleware** biết phải làm gì !!

- các hàm hay gặp như _takeEvery_ _takeLatest_,... đây là những Effect Creator

### Các Effect Creator hay dùng :

#### 1.takeEvery(pattern, saga, ...args)

Chạy saga mỗi khi có action(_action giống pattern_) được dispatch, _dispatch bao nhiêu sẽ chạy bấy nhiêu saga_, mặc dù task trước chưa chạy xong nó vẫn tạo 1 task mới và chạy cái saga mới, ví dụ nếu dispatch 3 lần thì sẽ tạo ra 3 saga

#### 2.takeLatest(pattern, saga, ...args)

Khi dispatch 1 action **_a_** với pattern thì nó sẽ chạy cái saga **_A_**. Tuy nhiên, nếu dispatch 1 lần nữa nó sẽ kiểm tra xem cái saga trước đó còn chạy hay không, nếu còn chạy nó sẽ **cancle** và lấy cái mới nhất
==> Ưu tiên thằng **_mới nhất_**, nếu bấm bụp,bụp,bụp... 3 phát thì thằng cuối cùng được chạy, 2 thằng trước bị **_cancle_** :)

#### 3.takeLeading(pattern, saga, ...args)

Chạy saga khi action pattern được dispatch, những action tiếp theo sẽ bị cancle cho đến khi trước đó chạy xong
vd : Nếu dispatch thằng _số 1_, _số 2_, _số 3_, thì nó sẽ **lấy thằng số 1** và phải **đợi thằng số 1 này chạy xong** thì nó mới _tiếp tục lắng nghe_. Còn nếu số 1 đang chạy mà dispatch số 2, số 3 thì **số 2, số 3 sẽ bị cancle**. Sau khi số 1 chạy xong , nếu dispatch tiếp thằng số 4 thì thằng số 4 sẽ được chạy
==> Ưu tiên thằng **_Cũ nhất_**

#### 4.put(action)

Là 1 action giúp dispatch action _từ saga_ lên **store**

#### 5.call(fn, ...args)

Dùng để gọi hàm, ví dụ gọi api, promise thì có thể sử dụng **call**

#### 6.all([...effects])

Chạy tất cả các **Effect** cùng một lúc

#### 7.take(pattern) and fork(fn, ...args)

Là 1 **Mô hình** _đợi(lắng nghe) và thực thi_ ("Đợi khi dispatch action thì làm gì đó")

#### 8.throttle(ms, pattern, saga, ...args)

Đảm bảo chỉ chạy saga **_1 lần_** _trong khoảng thời gian ms_
VD : trong khoảng thời gian 200ms , dù _dispatch bao nhiêu lần_ thì cũng chỉ **thực hiện 1 lần** thôi

#### 9.debounce(ms, pattern, saga, ...args)

Đảm bảo chỉ chạy saga **_1 lần_** sau khi **đã đợi** trong khoảng thời gian ms
VD: dispatch 1 action, debounce 500ms, thì nó sẽ đợi 500ms, nếu không có dispatch action nữa thì nó sẽ chạy, nếu dispatch action nữa thì nó sẽ tiếp tục đợi 500ms

### Phân biết takeEvery và takeLatest

### Phân biệt fork và spawn
