import { Injectable } from '@angular/core'
import { ClipboardService } from 'ngx-clipboard'
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme'

@Injectable({
  providedIn: 'root',
})
export class UtilityService {

  constructor(
    private clipboardService: ClipboardService,
    private toastrService: NbToastrService,
  ) { }

  async copy(textToCopy: string, type: 'address' | 'hash' | undefined) {
    try {
      this.clipboardService.copyFromContent(textToCopy)
      switch (type) {
        case 'address':
          this.showToast('success', 'Address copied to clipboard', textToCopy)
          break
        case 'hash':
          this.showToast('success', 'Hash copied to clipboard', textToCopy)
          break
        default:
          this.showToast('success', 'Copied!', '')
      }
    } catch (error) {
      console.error('Error while copying')
    }
  }

  private showToast(type: NbComponentStatus, title: string, body: string) {
    const config = {
      status: type,
      destroyByClick: true,
      duration: 4000,
      icon: 'clipboard-outline',
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: false,
    }
    return this.toastrService.show(
      body,
      title,
      config,
    )
  }


}
