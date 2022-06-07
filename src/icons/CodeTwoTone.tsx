// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import CodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CodeTwoTone';

export interface CodeTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const CodeTwoTone: CodeTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={CodeTwoToneSvg} />
    ;

CodeTwoTone.displayName = 'CodeTwoTone';

export default FunctionalComponent;