// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileExclamationTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExclamationTwoTone';

export interface FileExclamationTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileExclamationTwoTone: FileExclamationTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileExclamationTwoToneSvg} />
    ;

FileExclamationTwoTone.displayName = 'FileExclamationTwoTone';

export default FunctionalComponent;