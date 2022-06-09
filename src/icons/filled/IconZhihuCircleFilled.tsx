// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ZhihuCircleFilledSvg from '@ant-design/icons-svg/es/asn/ZhihuCircleFilled';

export interface ZhihuCircleFilledIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconZhihuCircleFilled: ZhihuCircleFilledIconType = (props, context) => (
    <Icon name='ZhihuCircleFilled' {...{ ...props, ...context.attrs }} icon={ZhihuCircleFilledSvg} />
);

IconZhihuCircleFilled.displayName = 'IconZhihuCircleFilled';

export default IconZhihuCircleFilled;