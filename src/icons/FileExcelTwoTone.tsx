// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileExcelTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExcelTwoTone';

export interface FileExcelTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileExcelTwoTone: FileExcelTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileExcelTwoToneSvg} />
    ;

FileExcelTwoTone.displayName = 'FileExcelTwoTone';

export default FunctionalComponent;