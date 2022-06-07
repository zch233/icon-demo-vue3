// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExclamationOutlined';

export interface FileExclamationOutlinedIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileExclamationOutlined: FileExclamationOutlinedIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileExclamationOutlinedSvg} />
    ;

FileExclamationOutlined.displayName = 'FileExclamationOutlined';

export default FunctionalComponent;