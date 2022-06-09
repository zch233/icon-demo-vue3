// GENERATE BY ./scripts/generate.ts
// 不要手动修改！！！

import { FunctionalComponent } from 'vue';
import Icon, { IconProps } from '../../components/Icon';
import ZhihuOutlinedSvg from '@ant-design/icons-svg/es/asn/ZhihuOutlined';

export interface ZhihuOutlinedIconType extends FunctionalComponent<IconProps> {
    displayName: string;
}

const IconZhihuOutlined: ZhihuOutlinedIconType = (props, context) => (
    <Icon name='ZhihuOutlined' {...{ ...props, ...context.attrs }} icon={ZhihuOutlinedSvg} />
);

IconZhihuOutlined.displayName = 'IconZhihuOutlined';

export default IconZhihuOutlined;