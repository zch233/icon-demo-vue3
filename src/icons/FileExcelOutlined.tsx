// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileExcelOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExcelOutlined';

export interface FileExcelOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileExcelOutlined: FileExcelOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileExcelOutlinedSvg} />
    ;

FileExcelOutlined.displayName = 'FileExcelOutlined';

export default FunctionalComponent;