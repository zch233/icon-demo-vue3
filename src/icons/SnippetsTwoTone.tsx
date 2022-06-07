// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import SnippetsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SnippetsTwoTone';

export interface SnippetsTwoToneIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const SnippetsTwoTone: SnippetsTwoToneIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={SnippetsTwoToneSvg} />
    ;

SnippetsTwoTone.displayName = 'SnippetsTwoTone';

export default FunctionalComponent;