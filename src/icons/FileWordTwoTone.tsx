// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileWordTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileWordTwoTone';

export interface FileWordTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileWordTwoTone: FileWordTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileWordTwoToneSvg} />
    ;

FileWordTwoTone.displayName = 'FileWordTwoTone';

export default FunctionalComponent;