// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../components/Icon';
import ZhihuSquareFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuSquareFilled';

export interface ZhihuSquareFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const ZhihuSquareFilled: ZhihuSquareFilledIconType = (props, context) => <Icon {...{ ...props, ...context.attrs }} icon={ZhihuSquareFilledSvg} />;

ZhihuSquareFilled.displayName = 'ZhihuSquareFilled';

export default ZhihuSquareFilled;