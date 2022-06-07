// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import FileTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTwoTone';

export interface FileTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const FileTwoTone: FileTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={FileTwoToneSvg} />
    ;

FileTwoTone.displayName = 'FileTwoTone';

export default FunctionalComponent;