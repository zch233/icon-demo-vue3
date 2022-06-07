// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileExcelFilledSvg from '@ant-design/icons-svg/lib/asn/FileExcelFilled';

export interface FileExcelFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileExcelFilled: FileExcelFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileExcelFilledSvg} />
    ;

FileExcelFilled.displayName = 'FileExcelFilled';

export default FunctionalComponent;