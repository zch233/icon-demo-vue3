// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileZipTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileZipTwoTone';

export interface FileZipTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileZipTwoTone: FileZipTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileZipTwoToneSvg} />
    ;

FileZipTwoTone.displayName = 'FileZipTwoTone';

export default FunctionalComponent;