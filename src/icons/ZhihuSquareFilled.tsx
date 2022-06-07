// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon from '../components/Icon.vue';
import {IconProps} from '../components/utils'
import ZhihuSquareFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuSquareFilled';

export interface ZhihuSquareFilledIconType extends FunctionalComponent<IconProps> {
  displayName: string;
}

const ZhihuSquareFilled: ZhihuSquareFilledIconType = (props, context) => 
    <Icon {...{ ...props, ...context.attrs }} icon={ZhihuSquareFilledSvg} />
    ;

ZhihuSquareFilled.displayName = 'ZhihuSquareFilled';

export default FunctionalComponent;