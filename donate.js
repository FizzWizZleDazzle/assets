function Donate() {
  var modalOverlay = document.createElement('div');
  modalOverlay.innerHTML = `<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style='max-height:1000px;'>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Donate</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <script src="https://donorbox.org/widget.js" paypalExpress="true"></script><iframe src="https://donorbox.org/embed/support-getgood-us?language=en" name="donorbox" allowpaymentrequest="allowpaymentrequest" seamless="seamless" frameborder="0" scrolling="no" height="900px" width="100%" style="max-width: 500px; min-width: 250px; max-height:none!important" allow="payment"></iframe>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`
  document.getElementById('modals').appendChild(modalOverlay);
}
