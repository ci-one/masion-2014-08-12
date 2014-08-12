/**
 * Created by wealab04 on 2014-05-30.
 */
//쿼리를 나열하고 exports를 통해 배포하도록 한다.

exports.boardlist = 'SELECT * FROM board order by id desc';
exports.boardget = 'select * from board where id=?';

// title, content, file, writer, href
exports.boardinsert = 'insert into board(id, title, content, file, writer, href, date) values(null,?,?,?,?,?,now())';
// title, content, file, href, id
exports.boardmodify = 'update board set title=?, content=?, file=?, href=?, date=now() where id=?';

exports.boardremove = 'delete from board where id=?';