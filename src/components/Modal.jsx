import { useEffect, useRef } from "react";
function Modal({ open, onClose }) {
  const dialogRef = useRef();

  useEffect(() => {
    if (open) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [open]);
const handleClick = () => {
    onClose()
}
  useEffect(() => {
    document.body.addEventListener('keyup', e => {
        if (e.key == 'Escape') {
            onClose()
        }
    })
  })
  return (
      <dialog ref={dialogRef} className="modal">
       <div>
       <h1>BMW ❤</h1>
       <h1 onClick={handleClick}>❌</h1>
       </div>
        <p>
        BMW AG - nemis avtomobil, mototsikl, dvigatel va velosiped ishlab chiqaruvchisi. Kompaniyaning boshqaruvchisi etib 2006-yildan 2015-yilgacha Norbert Raytxofer, 2015-yil may oyidan Harald Kruger, 2019-yil 18-iyuldan Oliver Sipse tayinlangan va boshqarmoqda. Kompaniya shiori - "boshqarishdagi qulaylik".  
        </p>
      </dialog>
  );
}

export default Modal;
