// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileAddTwoTone';

export interface FileAddTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileAddTwoTone: FileAddTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileAddTwoToneSvg} />
    ;

FileAddTwoTone.displayName = 'FileAddTwoTone';

export default FunctionalComponent;