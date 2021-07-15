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

  async copy(textToCopy: string, message: string, showTextToCopy = false) {
    try {
      this.clipboardService.copyFromContent(textToCopy)
      this.showToast('success', message, showTextToCopy ? textToCopy : '')
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
