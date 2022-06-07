// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTextTwoTone';

export interface FileTextTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileTextTwoTone: FileTextTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileTextTwoToneSvg} />
    ;

FileTextTwoTone.displayName = 'FileTextTwoTone';

export default FunctionalComponent;